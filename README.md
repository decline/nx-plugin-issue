# NxPluginIssue

This is a sample repository to reproduce an issue with Nx generators in a (Jest) test.

## Steps to reproduce

1. Checkout the repository
2. Run `docker compose up`

## Behaviour
Starting the docker container will execute the `nx run my-plugin:test` command which will fail the test with the following error:

```shell
LoadPluginError: Could not load plugin /app/node_modules/nx/src/plugins/project-json/build-nodes/package-json-next-to-project-json
```

If you run the `nx run my-plugin:test` command on a MacOS system, it will pass!