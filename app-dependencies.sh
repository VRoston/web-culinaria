curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt-get install nodejs -y
apt-get install npm -y
cd /home/vagrant/web-culinaria/frontend
rm package-lock.json
npm install #--no-bin-links
npm run build
npm start &
chown -R vagrant:vagrant /home/vagrant/web-culinaria/frontend