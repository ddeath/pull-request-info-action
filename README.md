# pull-request-info-action

This action retrieves information from Pull request responsible for specified commit

## Inputs

### `github-token`

**Required** 'The repository token, i.e. secrets.GITHUB_TOKEN'

### `commit_sha`

'Commit Sha for which you want to lookup PR information. If not provided github.sha will be used'

## Outputs

### `labels`

List of labels on PR

### `pullRequestBranchName`

Name of the from which PR was open

## Example usage

```yaml
uses: ddeath/pull-request-info-action@main
with:
  github-token: {{ secrets.GITHUB_TOKEN }}
```