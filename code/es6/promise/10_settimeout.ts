const getData = async () => {
    return new Promise(rv => {
        const time = setTimeout(() => {
            rv(1);
        }, 1000);
    });
}
getData().then(res => {
    console.log(res)
})