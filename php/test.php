<?php
    if ($pri_key = openssl_get_privatekey('file://'.getcwd().'/rsa_1024_priv.pem')) {
    }

    if ($pub_key = openssl_get_publickey('file://'.getcwd().'/rsa_1024_pub.pem')) {
    }

    $data = 'hello world, this is the message';
    openssl_private_encrypt($data, $encrypt, $pri_key);
    echo base64_encode($encrypt);

    openssl_public_decrypt($encrypt, $decrypt, $pub_key);
    echo $decrypt;