## Purpose of this package is to provide `scope` for storybook `shared stories`:

<br/>

### <b>Link 2 parts<b> 🔗:

1. <b> `config.stories` from `.storybook/main.js`. [Example](https://github.com/nrwl/nx-recipes/blob/main/storybook-publishing-strategies-single-framework/libs/storybook-host-shared/.storybook/main.js) <b>

2. <b> `implicitDependencies` from `project.json`. [Example](https://github.com/nrwl/nx-recipes/blob/main/storybook-publishing-strategies-single-framework/libs/storybook-host-shared/project.json#L6)<b>

---

**Note**: `implicitDependencies` is not required, but it's good to have it because it will show you in `nx dep-graph` which libs are connected to `storybook-host-shared` and you can see all libs in one place.

---

❗❗❗ Here we should list everything in scope `shared` from `config.stories` and `implicitDependencies` from `project.json`.
