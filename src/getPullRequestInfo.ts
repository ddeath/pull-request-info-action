import * as core from '@actions/core'
import { GitHub } from '@actions/github/lib/utils.js'
import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'

type Input = {
  octokit: InstanceType<typeof GitHub>
  repoName: string
  repoOwner: string
  commit_sha: string
}

type Response = RestEndpointMethodTypes["repos"]["listPullRequestsAssociatedWithCommit"]["response"]["data"][0]

export async function getPullRequestInfo({
  octokit,
  repoName,
  repoOwner,
  commit_sha,
}: Input): Promise<Response> {
  core.debug(
    `PR context - Owner: ${repoOwner} Repo: ${repoName} Commit_SHA: ${commit_sha}`
  );

  const response =
    await octokit.rest.repos.listPullRequestsAssociatedWithCommit({
      owner: repoOwner,
      repo: repoName,
      commit_sha,
    });

  core.debug(`Retrieved commit data: ${response.data}`);

  if (response.data.length > 0) {
    core.warning("Found multiple matching PRs. Information will returned only for first PR.")
  }

  if (response.data.length === 0) {
    throw Error(`Didnt find any matching PRs! PR context - Owner: ${repoOwner} Repo: ${repoName} Commit_SHA: ${commit_sha}`)
  }

  const pullRequestInfo = response.data[0];

  core.debug(`Retrieved PR: ${pullRequestInfo}`);

  return pullRequestInfo
}
