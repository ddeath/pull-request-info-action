import * as core from '@actions/core'
import * as github from '@actions/github'
import { getPullRequests } from './getPullRequests.js'
import { filterPullRequests } from './filterPullRequests.js';

const run = async () => {
  const token = core.getInput("github_token", { required: true })
  const onlyMerged = core.getInput("only_merged").toLowerCase() === 'true'
  const targetBranch = core.getInput("target_branch")
  const failOnMissingPr = core.getInput("fail_on_missing_pr").toLowerCase() === 'true'

  const octokit = github.getOctokit(token)

  const repoName = github.context.repo.repo
  const repoOwner = github.context.repo.owner
  const commit_sha = github.context.sha

  const pullRequests = await getPullRequests({octokit, repoOwner, repoName, commit_sha})
  const filteredPullRequests = filterPullRequests(pullRequests, { onlyMerged, targetBranch })

  if (failOnMissingPr && filteredPullRequests.length === 0) {
    throw new Error("No PRs matching criteria were found!")
  }

  core.setOutput("pullRequests", filteredPullRequests)
}

run().catch((err) => {
  core.setFailed(`Action failed with error: ${err.message}`)
})
