# git cmd to maintain seapre.github.io
* new branch: site 
 > git checkout -b site
 > git push origin site 
* change source to site branch in github pages
 -> github pages 
  -> Settings
   -> Source
    -> site -> Save 
* clone to local
+ on github.com, switch to main branch
> cd project
> git clone https://github.com/seapre/seapre.github.io.git seapre.github.io

+ modify in main branch
- commit to github
> git add -A 
> git commit -m 'new change'
> git push origin main

+ merge to site branch, as seapre.github.io use site branch to publish
> git switch site
> git merge main
> git add -A 
> git commit -m 'merge from main'
> git push origin site 
* view changes in seapre.github.io 
