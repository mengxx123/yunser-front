echo "deploy start"
cd /root/project
git clone https://github.com/yunser/yunser-front.git
cd yunser-front/
git branch dev
git checkout dev
git merge origin/dev
cnpm install
npm run build
cp -r dist /usr/local/nginx/yunser-front
echo "deploy start"