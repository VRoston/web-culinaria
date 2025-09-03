cd /home/vagrant
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash | cd /home/vagrant
\. "$HOME/.nvm/nvm.sh"
nvm install 20
apt-get install npm -y
cd web-culinaria/frontend
npm install #--no-bin-links
npm run build
apt-get install python3-pip -y