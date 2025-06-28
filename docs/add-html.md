# Add HTML for github pages
* default is README.md

## 1. change default page to index.html
* set .html 
   1. Go to your repository on GitHub.
   2. Click the Settings tab.
   3. In the "Code and automation" section of the sidebar, click Pages.
   4. Under "Build and deployment", for the Source, select Deploy from a branch.
   5. For the branch, select the branch that contains your html folder (e.g.,
      main or master).
   6. For the folder, select /html and click Save.
  This will tell GitHub Pages to look for your index.html file inside the html
  directory.

## 2. create index.html
* in above steps, folder only /root, /docs available to select, no /html
* create a new file named index.html in the root
* or create a new folder named docs, then create index.html inside docs
