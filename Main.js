function sendMessage() {
    const input = document.getElementById('chat-input');
    if (input.value.trim() !== "") 
        database.ref('mensagens').push({
            usuario: userName,
            texto: input.value,
            horario: Date.now()
        });
        input.value = "";
    }
}

database.ref('mensagens').on('child_added', (snapshot) => {
    const dados = snapshot.val();
    const box = document.getElementById('chat-box');
    
    const msg = document.createElement('div');
    msg.className = dados.usuario === userName ? "bubble me" : "bubble bot";
    msg.innerHTML = `<b>${dados.usuario}:</b> ${dados.texto}`;
    
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
});

