## Purpose of this package is to provide `scope` for storybook `users stories`:

<br/>

### <b>Link 2 parts<b> 🔗:

1. <b> `config.stories` from `.storybook/main.js`. [Example](https://github.com/nrwl/nx-recipes/blob/main/storybook-publishing-strategies-single-framework/libs/storybook-host-admin/.storybook/main.js) <b>

2. <b> `implicitDependencies` from `project.json`. [Example](https://github.com/nrwl/nx-recipes/blob/main/storybook-publishing-strategies-single-framework/libs/storybook-host-admin/project.json#L6)<b>

---

**Note**: `implicitDependencies` is not required, but it's good to have it because it will show you in `nx dep-graph` which libs are connected to `storybook-host-users` and you can see all libs in one place.

---

❗❗❗ Here we should list everything in scope `users` from `config.stories` and `implicitDependencies` from `project.json`.
