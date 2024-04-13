echo "Start submitting code to the local repository"

cd /Users/li/Desktop/blog;
git add *
echo;



echo "Commit the changes to the local repository"
echo "please enter the commit info...."



git commit -m "document"
echo;
 
echo "Commit the changes to the remote git server"
git push origin main
echo;
 
echo "Batch execution complete!"
echo;
