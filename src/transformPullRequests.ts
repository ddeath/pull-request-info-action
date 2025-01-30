import * as core from '@actions/core'
import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'

type PullRequestData = RestEndpointMethodTypes["repos"]["listPullRequestsAssociatedWithCommit"]["response"]["data"][0]

type TransformedPullRequest = {
  labels: string[]
  targetBranchName: string
  sourceBranchName: string
}

export const transformPullRequests = (data: PullRequestData[]): TransformedPullRequest[] => {
  core.debug(`Transforming pull requests`);

  return data.map(pr => ({
    labels: pr.labels.map(label => label.name),
    sourceBranchName: pr.head.ref,
    targetBranchName: pr.base.ref,
  }))
}