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
  github_token: {{ secrets.GITHUB_TOKEN }}
```

### Example content of respons from action:
```json
[
  {
    "url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/pulls/11",
    "id": 3332323,
    "node_id": "PR_kwDONri8wc6JYffU",
    "html_url": "https://github.com/YOUR-OWN-ORG/testing-playground/pull/11",
    "diff_url": "https://github.com/YOUR-OWN-ORG/testing-playground/pull/11.diff",
    "patch_url": "https://github.com/YOUR-OWN-ORG/testing-playground/pull/11.patch",
    "issue_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/issues/11",
    "number": 11,
    "state": "closed",
    "locked": false,
    "title": "NOJIRA: Debugging 6",
    "user": {
      "login": "ddeath",
      "id": 32332,
      "node_id": "MDQ6VXNlcjI1MaczNck=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2537379?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ddeath",
      "html_url": "https://github.com/ddeath",
      "followers_url": "https://api.github.com/users/ddeath/followers",
      "following_url": "https://api.github.com/users/ddeath/following{/other_user}",
      "gists_url": "https://api.github.com/users/ddeath/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ddeath/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ddeath/subscriptions",
      "organizations_url": "https://api.github.com/users/ddeath/orgs",
      "repos_url": "https://api.github.com/users/ddeath/repos",
      "events_url": "https://api.github.com/users/ddeath/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ddeath/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "body": "NOJIRA: Debugging 6",
    "created_at": "2025-01-29T15:52:30Z",
    "updated_at": "2025-01-29T15:52:42Z",
    "closed_at": "2025-01-29T15:52:40Z",
    "merged_at": "2025-01-29T15:52:40Z",
    "merge_commit_sha": "ef3b3e201b4ba04b39d25d064f141786f2f6bd2f",
    "assignee": null,
    "assignees": [

    ],
    "requested_reviewers": [

    ],
    "requested_teams": [

    ],
    "labels": [

    ],
    "milestone": null,
    "draft": false,
    "commits_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/pulls/11/commits",
    "review_comments_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/pulls/11/comments",
    "review_comment_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/pulls/comments{/number}",
    "comments_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/issues/11/comments",
    "statuses_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/statuses/fe8b463d54c700dcc188520486294f72fa1fb014",
    "head": {
      "label": "YOUR-OWN-ORG:chore/NOJIRA/debugging-6",
      "ref": "chore/NOJIRA/debugging-6",
      "sha": "fe8b463d54c700dcc188520486294f72fa1fb014",
      "user": {
        "login": "YOUR-OWN-ORG",
        "id": 191620985,
        "node_id": "O_kgDOC2vneQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/191620985?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/YOUR-OWN-ORG",
        "html_url": "https://github.com/YOUR-OWN-ORG",
        "followers_url": "https://api.github.com/users/YOUR-OWN-ORG/followers",
        "following_url": "https://api.github.com/users/YOUR-OWN-ORG/following{/other_user}",
        "gists_url": "https://api.github.com/users/YOUR-OWN-ORG/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/YOUR-OWN-ORG/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/YOUR-OWN-ORG/subscriptions",
        "organizations_url": "https://api.github.com/users/YOUR-OWN-ORG/orgs",
        "repos_url": "https://api.github.com/users/YOUR-OWN-ORG/repos",
        "events_url": "https://api.github.com/users/YOUR-OWN-ORG/events{/privacy}",
        "received_events_url": "https://api.github.com/users/YOUR-OWN-ORG/received_events",
        "type": "Organization",
        "user_view_type": "public",
        "site_admin": false
      },
      "repo": {
        "id": 918076609,
        "node_id": "R_kgDONri8wQ",
        "name": "testing-playground",
        "full_name": "YOUR-OWN-ORG/testing-playground",
        "private": true,
        "owner": {
          "login": "YOUR-OWN-ORG",
          "id": 191620985,
          "node_id": "O_kgDOC2vneQ",
          "avatar_url": "https://avatars.githubusercontent.com/u/191620985?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/YOUR-OWN-ORG",
          "html_url": "https://github.com/YOUR-OWN-ORG",
          "followers_url": "https://api.github.com/users/YOUR-OWN-ORG/followers",
          "following_url": "https://api.github.com/users/YOUR-OWN-ORG/following{/other_user}",
          "gists_url": "https://api.github.com/users/YOUR-OWN-ORG/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/YOUR-OWN-ORG/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/YOUR-OWN-ORG/subscriptions",
          "organizations_url": "https://api.github.com/users/YOUR-OWN-ORG/orgs",
          "repos_url": "https://api.github.com/users/YOUR-OWN-ORG/repos",
          "events_url": "https://api.github.com/users/YOUR-OWN-ORG/events{/privacy}",
          "received_events_url": "https://api.github.com/users/YOUR-OWN-ORG/received_events",
          "type": "Organization",
          "user_view_type": "public",
          "site_admin": false
        },
        "html_url": "https://github.com/YOUR-OWN-ORG/testing-playground",
        "description": "Repository without the rules where you can do whatever you want",
        "fork": false,
        "url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground",
        "forks_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/forks",
        "keys_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/teams",
        "hooks_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/hooks",
        "issue_events_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/issues/events{/number}",
        "events_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/events",
        "assignees_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/assignees{/user}",
        "branches_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/branches{/branch}",
        "tags_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/tags",
        "blobs_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/languages",
        "stargazers_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/stargazers",
        "contributors_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/contributors",
        "subscribers_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/subscribers",
        "subscription_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/subscription",
        "commits_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/contents/{+path}",
        "compare_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/merges",
        "archive_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/downloads",
        "issues_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/issues{/number}",
        "pulls_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/labels{/name}",
        "releases_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/releases{/id}",
        "deployments_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/deployments",
        "created_at": "2025-01-17T07:52:22Z",
        "updated_at": "2025-01-29T15:52:44Z",
        "pushed_at": "2025-01-29T15:52:42Z",
        "git_url": "git://github.com/YOUR-OWN-ORG/testing-playground.git",
        "ssh_url": "git@github.com:YOUR-OWN-ORG/testing-playground.git",
        "clone_url": "https://github.com/YOUR-OWN-ORG/testing-playground.git",
        "svn_url": "https://github.com/YOUR-OWN-ORG/testing-playground",
        "homepage": "",
        "size": 88,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "Kotlin",
        "has_issues": false,
        "has_projects": false,
        "has_downloads": false,
        "has_wiki": false,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": false,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [
          "bc-enablement",
          "testing"
        ],
        "visibility": "private",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "main"
      }
    },
    "base": {
      "label": "YOUR-OWN-ORG:main",
      "ref": "main",
      "sha": "75b335c819b7f370acac2c17d6a9f5ae33859517",
      "user": {
        "login": "YOUR-OWN-ORG",
        "id": 191620985,
        "node_id": "O_kgDOC2vneQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/191620985?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/YOUR-OWN-ORG",
        "html_url": "https://github.com/YOUR-OWN-ORG",
        "followers_url": "https://api.github.com/users/YOUR-OWN-ORG/followers",
        "following_url": "https://api.github.com/users/YOUR-OWN-ORG/following{/other_user}",
        "gists_url": "https://api.github.com/users/YOUR-OWN-ORG/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/YOUR-OWN-ORG/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/YOUR-OWN-ORG/subscriptions",
        "organizations_url": "https://api.github.com/users/YOUR-OWN-ORG/orgs",
        "repos_url": "https://api.github.com/users/YOUR-OWN-ORG/repos",
        "events_url": "https://api.github.com/users/YOUR-OWN-ORG/events{/privacy}",
        "received_events_url": "https://api.github.com/users/YOUR-OWN-ORG/received_events",
        "type": "Organization",
        "user_view_type": "public",
        "site_admin": false
      },
      "repo": {
        "id": 918076609,
        "node_id": "R_kgDONri8wQ",
        "name": "testing-playground",
        "full_name": "YOUR-OWN-ORG/testing-playground",
        "private": true,
        "owner": {
          "login": "YOUR-OWN-ORG",
          "id": 191620985,
          "node_id": "O_kgDOC2vneQ",
          "avatar_url": "https://avatars.githubusercontent.com/u/191620985?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/YOUR-OWN-ORG",
          "html_url": "https://github.com/YOUR-OWN-ORG",
          "followers_url": "https://api.github.com/users/YOUR-OWN-ORG/followers",
          "following_url": "https://api.github.com/users/YOUR-OWN-ORG/following{/other_user}",
          "gists_url": "https://api.github.com/users/YOUR-OWN-ORG/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/YOUR-OWN-ORG/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/YOUR-OWN-ORG/subscriptions",
          "organizations_url": "https://api.github.com/users/YOUR-OWN-ORG/orgs",
          "repos_url": "https://api.github.com/users/YOUR-OWN-ORG/repos",
          "events_url": "https://api.github.com/users/YOUR-OWN-ORG/events{/privacy}",
          "received_events_url": "https://api.github.com/users/YOUR-OWN-ORG/received_events",
          "type": "Organization",
          "user_view_type": "public",
          "site_admin": false
        },
        "html_url": "https://github.com/YOUR-OWN-ORG/testing-playground",
        "description": "Repository without the rules where you can do whatever you want",
        "fork": false,
        "url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground",
        "forks_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/forks",
        "keys_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/teams",
        "hooks_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/hooks",
        "issue_events_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/issues/events{/number}",
        "events_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/events",
        "assignees_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/assignees{/user}",
        "branches_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/branches{/branch}",
        "tags_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/tags",
        "blobs_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/languages",
        "stargazers_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/stargazers",
        "contributors_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/contributors",
        "subscribers_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/subscribers",
        "subscription_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/subscription",
        "commits_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/contents/{+path}",
        "compare_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/merges",
        "archive_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/downloads",
        "issues_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/issues{/number}",
        "pulls_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/labels{/name}",
        "releases_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/releases{/id}",
        "deployments_url": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/deployments",
        "created_at": "2025-01-17T07:52:22Z",
        "updated_at": "2025-01-29T15:52:44Z",
        "pushed_at": "2025-01-29T15:52:42Z",
        "git_url": "git://github.com/YOUR-OWN-ORG/testing-playground.git",
        "ssh_url": "git@github.com:YOUR-OWN-ORG/testing-playground.git",
        "clone_url": "https://github.com/YOUR-OWN-ORG/testing-playground.git",
        "svn_url": "https://github.com/YOUR-OWN-ORG/testing-playground",
        "homepage": "",
        "size": 88,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "Kotlin",
        "has_issues": false,
        "has_projects": false,
        "has_downloads": false,
        "has_wiki": false,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": false,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [
          "bc-enablement",
          "testing"
        ],
        "visibility": "private",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "main"
      }
    },
    "_links": {
      "self": {
        "href": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/pulls/11"
      },
      "html": {
        "href": "https://github.com/YOUR-OWN-ORG/testing-playground/pull/11"
      },
      "issue": {
        "href": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/issues/11"
      },
      "comments": {
        "href": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/issues/11/comments"
      },
      "review_comments": {
        "href": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/pulls/11/comments"
      },
      "review_comment": {
        "href": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/pulls/comments{/number}"
      },
      "commits": {
        "href": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/pulls/11/commits"
      },
      "statuses": {
        "href": "https://api.github.com/repos/YOUR-OWN-ORG/testing-playground/statuses/fe8b463d54c700dcc188520486294f72fa1fb014"
      }
    },
    "author_association": "MEMBER",
    "auto_merge": null,
    "active_lock_reason": null
  }
]
```
