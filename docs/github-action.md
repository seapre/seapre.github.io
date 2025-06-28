# github action to deploy seapre.github.io
* create deploy.yml in .github/workflows
```yml
"""
name: Deploy GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Pages
        uses: actions/configure-pages@v3

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./html

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
"""
```
- This workflow will automatically build and deploy your site whenever you push
  to the main branch.

* push to main branch and auto deploy to github pages
   1. Commit and push the .github/workflows/deploy.yml file to your repository.
   2. Go to your repository on GitHub.
   3. Click the Settings tab.
   4. In the "Code and automation" section of the sidebar, click Pages.
   5. Under "Build and deployment", for the Source, select GitHub Actions.
   6. Click Save.
   7. Wait a few minutes for the deployment to complete.
   8. Go to your site's URL.

   