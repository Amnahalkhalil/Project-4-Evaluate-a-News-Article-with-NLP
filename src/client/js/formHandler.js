function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let url = document.querySelectorAll('input#url')
    //    let input_url = document.querySelectorAll('input.url')
    //    let input_url = document.querySelectorAll('input')
    if (Client.checkURL(JSON.parse(JSON.stringify(url[0].value)))) {
        console.log("::: Form Submitted :::")
        fetch('/post', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: url[0].value })
        })
            .then(res => res.json())
            .then(function (res) {
                var error_alert = document.querySelector('div.errors');
                error_alert.style.display = "none";
                document.querySelector('#polarity').innerHTML = res.polarity
                document.querySelector(' #subjectivity').innerHTML = res.subjectivity
                document.querySelector('#polarity_confidence').innerHTML = res.polarity_confidence
                document.querySelector('#subjectivity_confidence').innerHTML = res.subjectivity_confidence
                document.querySelector('#excerpt').innerHTML = res.text
            })

    } else {
        var error_alert = document.querySelector('div.errors');
        var error = document.querySelector('div.errors #error');
        error.innerHTML = "invalid URL format"
        error_alert.style.display = "block";
    }
}

export { handleSubmit }
