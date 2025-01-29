import * as core from '@actions/core'
import * as github from '@actions/github'
import { getPullRequestInfo } from './getPullRequestInfo.js'

const run = async () => {
  const token = core.getInput("github-token", { required: true });
  const octokit = github.getOctokit(token)

  const repoName = github.context.repo.owner
  const repoOwner = github.context.repo.repo
  const commit_sha = github.context.sha

  const pullRequestInfo = await getPullRequestInfo({octokit, repoOwner, repoName, commit_sha})
  
  const labels = pullRequestInfo.labels.map(label => label.name)
  const pullRequestBranchName = pullRequestInfo.head.ref


  core.setOutput("labels", labels)
  core.setOutput("pullRequestBranchName", pullRequestBranchName)
}

run().catch((err) => {
  core.setFailed(`Action failed with error: ${err.message}`)
})
