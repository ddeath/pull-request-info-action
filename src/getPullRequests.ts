import * as core from '@actions/core'
import { GitHub } from '@actions/github/lib/utils.js'
import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'

type Input = {
  octokit: InstanceType<typeof GitHub>
  repoName: string
  repoOwner: string
  commit_sha: string
}

type PullRequestData = RestEndpointMethodTypes["repos"]["listPullRequestsAssociatedWithCommit"]["response"]["data"][0]

export async function getPullRequests({
  octokit,
  repoName,
  repoOwner,
  commit_sha,
}: Input): Promise<PullRequestData[]> {
  core.debug(
    `PR context - Owner: ${repoOwner} Repo: ${repoName} Commit_SHA: ${commit_sha}`
  );

  const response =
    await octokit.rest.repos.listPullRequestsAssociatedWithCommit({
      owner: repoOwner,
      repo: repoName,
      commit_sha,
    });

  core.debug(`Retrieved commit PRs data: ${response.data}`);

  return response.data
}
