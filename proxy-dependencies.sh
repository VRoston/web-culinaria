apt-get install nginx -y
cp /home/vagrant/web-culinaria/nginx.conf /etc/nginx/sites-available
ln -s /etc/nginx/sites-available/nginx.conf /etc/nginx/sites-enabled/
systemctl reload nginx
ip link set eth0 down