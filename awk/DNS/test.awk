BEGIN {
    key = 1;
}
{
    # 跳过空行和注释
    isComment = index($1, "#");
    if(length($0) == 0 || isComment > 0) next;
    ipArr[key] = $1;
    domainNameArr[key++] = $2;
}
END {
    printf("<?xml version='1.0' encoding='UTF-8' ?>\n<?charles serialisation-version='2.0' ?>\n<dnsSpoofing>\n<toolEnabled>true</toolEnabled>\n<spoofs>") > "test.xml";
    for (item in ipArr) {
        printf("<dnsSpoof>") >> "test.xml";
        printf("<name>%s</name>", domainNameArr[item]) >> "test.xml";
        printf("<address>%s</address>", ipArr[item]) >> "test.xml";
        printf("<enabled>true</enabled>") >> "test.xml";
        printf("</dnsSpoof>") >> "test.xml";
    }
    printf("</spoofs>\n</dnsSpoofing>") >> "test.xml";
}
