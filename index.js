let imgbox=document.getElementById('imgbox');
let imgqr=document.getElementById('imgqr');
let qrtext=document.getElementById('qrtext');

function genarateqr(){
    if(qrtext.value!=""){

    imgqr.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
    
    imgbox.classList.add("show-img");
    }
        
    else{
        qrtext.classList.add('error');

        setTimeout(()=>{
            qrtext.classList.remove('error')
        },1000);

    }
}
