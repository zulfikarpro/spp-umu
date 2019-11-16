@author Achmad Rivaldi

Production konfigurasi
npm run build (result /umu-spp)

APACHE PRODUCTION
1 masukan .htaccess ke dalam /umu-spp
2 kemudian folder /umu-spp dipindahkan kedalam server apache /var/www/html atau /htdoc

NGINX PRODUCTION
1 Pindahkan folder /umu-spp ke dalam /var/www/html nginx
2 Masukan teks konfigurasi yang ada di file nginx.conf ke dalam default.conf simpan didalam server:{  }
