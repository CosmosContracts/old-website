  
rm www.tar

tar -zcf www.tar build/

scp www.tar dorian@juno.latouche.dev:/home/dorian/juno/

ssh -t dorian@juno.latouche.dev "cd juno; tar -xf www.tar; sudo rm -rf www; mv build/ www"