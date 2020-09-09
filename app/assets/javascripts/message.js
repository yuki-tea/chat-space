$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Message-box">
          <div class="Chat-main__field">
            <div class="Chat-main__field-list-name">
              ${message.user_name}
            </div>
            <div class="Chat-main__field-list-date">
              ${message.created_at}
            </div>
          </div>
          <div class="Chat-main__field-message">
            <p class="Message_content">
              ${message.content}
            </p>
            <img class="Message_image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Message-box">
        <div class="Chat-main__field">
          <div class="Chat-main__field-list-name">
            ${message.user_name}
          </div>
          <div class="Chat-main__field-list-date">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-main__field-message">
          <p class="Message_content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message-list').append(html);
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight}); 
      $('form')[0].reset();
      $('.Post-form__icon-send').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });
});