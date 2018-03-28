{
    len = NF;
    if (len == 0) next;
    res = "";
    for (i = 3; i <= NF; i++) {
        str = $i;
        sub(",", "", str);
        printf(str) >> "res.txt";
        printf(" ") >> "res.txt";
    }
    printf($2) >> "res.txt";
    printf(" ") >> "res.txt";
    printf($1) >> "res.txt";
    printf("\n") >> "res.txt";
}