import * as core from '@actions/core'
import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'

type PullRequestData = RestEndpointMethodTypes["repos"]["listPullRequestsAssociatedWithCommit"]["response"]["data"][0]

type Options = {
  onlyMerged?: boolean
  targetBranch?: string
}

export const filterPullRequests = (data: PullRequestData[], options: Options): PullRequestData[] => {
  const { onlyMerged, targetBranch } = options
  
  core.debug(`PRs filter options: ${options}`);

  const filteredPRs = data
      .filter(pr => {
        if (onlyMerged && pr.merged_at === null) return false
        if (targetBranch && pr.base.ref !== targetBranch) return false
        return true
      })
      .sort((a, b) => {
        if (onlyMerged) return a.merged_at!.localeCompare(b.merged_at!)
        return a.updated_at.localeCompare(b.updated_at)
      })

    core.debug(`Filtered PR: ${filteredPRs}`);

    return filteredPRs
}