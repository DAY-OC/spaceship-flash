document.body.style.backgroundColor = 'darkgreen';


document.querySelector('#button').addEventListener('click', () => {
    var inp_text = document.querySelector('#input').value;
    var inp_text = inp_text.toLowerCase();
    var bin_text = '';
    for (var i = 0; i < inp_text.length; i++) {
        bin_text += inp_text[i].charCodeAt(0).toString(2) + ' ';
    }
    document.querySelector('#output').innerHTML = bin_text;

    bin_text = '11111111' + bin_text.replaceAll(' ', '') + '11111111';
    console.log(bin_text);
    //  for each character in bin_text change background colour of body for 1 sec
    var i = 0;
    var interval = setInterval(() => {
        if (i < bin_text.length) {
            if (bin_text[i] == '0') {
                document.body.style.backgroundColor = 'black';
            } else {
                document.body.style.backgroundColor = 'white';
            }
            i++;
        } else {
            document.body.style.backgroundColor = 'darkgreen';
            clearInterval(interval);
        }
    }, 500);
});