const button = document.querySelectorAll('.btn-AoS')
    button.forEach(btn => {
      btn.addEventListener('mouseleave', function (){
        btn.blur()
      })
    });