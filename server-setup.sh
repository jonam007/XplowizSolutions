#!/bin/bash

set -e

echo "Updating system packages..."
sudo apt update && sudo apt upgrade -y

echo "Installing Nginx..."
sudo apt install -y nginx

echo "Enabling Nginx and starting service..."
sudo systemctl enable nginx
sudo systemctl start nginx

echo "Configuring UFW firewall for OpenSSH and Nginx..."
sudo ufw allow 'OpenSSH'
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

echo "Installing Docker..."
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

echo "Enabling Docker to start on boot..."
sudo systemctl enable docker
sudo usermod -aG docker $USER

echo "Installing Docker Compose..."
DOCKER_COMPOSE_VERSION=2.24.0
sudo curl -L "https://github.com/docker/compose/releases/download/v$DOCKER_COMPOSE_VERSION/docker-compose-$(uname -s)-$(uname -m)" \
  -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

echo "Verifying Docker & Docker Compose installation..."
docker --version
docker-compose --version


echo "Configuring Nginx for Xplowiz Solutions..."

# Move certificate files
sudo mkdir -p /etc/nginx/ssl/xplowiz.in
sudo cp /home/azureuser/XplowizSolutions/nginx.conf /etc/nginx/sites-available/xplowiz.in
sudo ln -sf /etc/nginx/sites-available/xplowiz.in /etc/nginx/sites-enabled/xplowiz.in
sudo nginx -t
sudo systemctl reload nginx




# echo "SSl configuration for Nginx..."
# sudo apt install -y certbot python3-certbot-nginx
# sudo certbot --nginx --non-interactive --agree-tos -m contact@xplowiz.com -d xplowiz.in -d www.xplowiz.in 
# sudo certbot --server https://acme.zerossl.com/v2/DV90 \
#   --eab-kid w7N8mE4I6lq6VNver46bJQ \
#   --eab-hmac-key ce-aDjiJNZFJbD7X6azNLRL9LUKRbVYcYSoMkqdFVi03NU4nltwR-KhhNDjKvfAzBq-DSv4kFF2H4FzSqKxm0g \
#   --email contact@xplowiz.com \
#   --agree-tos \
#   --nginx \
#   -d xplowiz.in -d www.xplowiz.in 
# sudo systemctl reload nginx






