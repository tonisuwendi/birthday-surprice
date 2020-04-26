$("#timerCountdown").countdown({
  date: "May 16, 2020 00:00:00",
  render: function (data) {
    var el = $(this.el);
    el.empty()
      .append(this.leadingZeros(data.days, 2) + " : ")
      .append(this.leadingZeros(data.hours, 2) + " : ")
      .append(this.leadingZeros(data.min, 2) + " : ")
      .append(this.leadingZeros(data.sec, 2));
  }
});

$("img.kado").click(function () {
  $(this).addClass("animated shake");
  setTimeout(stopKado, 600);
  function stopKado() {
    $("img.kado").removeClass("animated shake");
  }
});

$("button.btn-show-question").click(function () {
  $("div.ques div.box-q").show();
  $("div.ques div.overlay").show();
});

$("div.ques div.box-q button.answer").click(function () {
  const answer = $(this).val();
  $("div.ques div.box-q button.answer").css("background-color", "#ddd");
  $("div.ques div.box-q button.answer").css("color", "black");
  $(this).css("background-color", "#555");
  $(this).css("color", "white");
  $("#answerBox1").val(answer);
});

$("#btnAnswerBox1").click(function () {
  if ($("#answerBox1").val() !== "") {
    $("div.ques div.box-q button.answer1").prop("disabled", true);
    $(this).hide();
    $("#btnNextBox1").show();
    if ($("#answerBox1").val() === "1") {
      $("div.ques div.box-q button.answer[value='1']").css(
        "background-color",
        "#218838"
      );
      $("div.ques div.box-q div.bukti button[value='1']").html(
        `<i class="fa fa-check-circle"></i>`
      );
    } else {
      $("div.ques div.box-q button.answer[value='1']").css("color", "white");
      const answerDia = $("#answerBox1").val();
      $(`div.ques div.box-q button.answer[value='1']`).css(
        "background-color",
        "#218838"
      );
      $(`div.ques div.box-q button.answer[value='${answerDia}']`).css(
        "background-color",
        "#C82333"
      );
      $("div.ques div.box-q div.bukti button[value='1']").html(
        `<i class="fa fa-times-circle"></i>`
      );
    }
  }
});

$("#btnNextBox1").click(function () {
  $("div.ques div.box-q div.wrapper-ques").html(`
  <h2 class="title">Question 2 of 9</h2>
  <p class="quest">MANTAN ANAK CYBER GIS?</p>
  <button class="answer answer2" value="1">AHAHAHAH KETAUAN</button>
  <button class="answer answer2" value="2">JAN KAPOK</button>
  <button class="answer answer2" value="3">BIG YES</button>
  <input type="hidden" id="answerBox2" />
  <button class="next" id="btnAnswerBox2">Answer</button>
  <button class="next" id="btnNextBox2" style="display: none;">
    Next
  </button>
  `);
});

// kedua
$("div.ques div.box-q").on("click", "button.answer2", function () {
  const answer = $(this).val();
  $("div.ques div.box-q button.answer").css("background-color", "#ddd");
  $("div.ques div.box-q button.answer").css("color", "black");
  $(this).css("background-color", "#555");
  $(this).css("color", "white");
  $("#answerBox2").val(answer);
});

$("div.ques div.box-q").on("click", "#btnAnswerBox2", function () {
  if ($("#answerBox2").val() !== "") {
    $("div.ques div.box-q button.answer2").prop("disabled", true);
    $(this).hide();
    $("#btnNextBox2").show();
    if ($("#answerBox2").val() === "2") {
      $("div.ques div.box-q button.answer[value='2']").css(
        "background-color",
        "#218838"
      );
      $("div.ques div.box-q div.bukti button[value='2']").html(
        `<i class="fa fa-check-circle"></i>`
      );
    } else {
      $("div.ques div.box-q button.answer[value='2']").css("color", "white");
      const answerDia = $("#answerBox2").val();
      $(`div.ques div.box-q button.answer[value='2']`).css(
        "background-color",
        "#218838"
      );
      $(`div.ques div.box-q button.answer[value='${answerDia}']`).css(
        "background-color",
        "#C82333"
      );
      $("div.ques div.box-q div.bukti button[value='2']").html(
        `<i class="fa fa-times-circle"></i>`
      );
    }
  }
});

$("div.ques div.box-q").on("click", "#btnNextBox2", function () {
  $("div.ques div.box-q div.wrapper-ques").html(`
  <h2 class="title">Question 3 of 9</h2>
  <p class="quest">Hari ini udah mandi?</p>
  <button class="answer answer3" value="1">MUSTAHIL </button>
  <button class="answer answer3" value="2">NIAT BELOM ADA</button>
  <button class="answer answer3" value="3">UDAH</button>
  <input type="hidden" id="answerBox3" />
  <button class="next" id="btnAnswerBox3">Answer</button>
  <button class="next" id="btnNextBox3" style="display: none;">
    Next
  </button>
  `);
});

// ketiga
$("div.ques div.box-q").on("click", "button.answer3", function () {
  const answer = $(this).val();
  $("div.ques div.box-q button.answer").css("background-color", "#ddd");
  $("div.ques div.box-q button.answer").css("color", "black");
  $(this).css("background-color", "#555");
  $(this).css("color", "white");
  $("#answerBox3").val(answer);
});

$("div.ques div.box-q").on("click", "#btnAnswerBox3", function () {
  if ($("#answerBox3").val() !== "") {
    $("div.ques div.box-q button.answer3").prop("disabled", true);
    $(this).hide();
    $("#btnNextBox3").show();
    if ($("#answerBox3").val() === "1") {
      $("div.ques div.box-q button.answer[value='1']").css(
        "background-color",
        "#218838"
      );
      $("div.ques div.box-q div.bukti button[value='3']").html(
        `<i class="fa fa-check-circle"></i>`
      );
    } else {
      $("div.ques div.box-q button.answer[value='1']").css("color", "white");
      const answerDia = $("#answerBox3").val();
      $(`div.ques div.box-q button.answer[value='1']`).css(
        "background-color",
        "#218838"
      );
      $(`div.ques div.box-q button.answer[value='${answerDia}']`).css(
        "background-color",
        "#C82333"
      );
      $("div.ques div.box-q div.bukti button[value='3']").html(
        `<i class="fa fa-times-circle"></i>`
      );
    }
  }
});

$("div.ques div.box-q").on("click", "#btnNextBox3", function () {
  $("div.ques div.box-q div.wrapper-ques").html(`
  <h2 class="title">Question 4 of 9</h2>
  <p class="quest">HARI INI SAHUR AMAN?</p>
  <button class="answer answer4" value="1">BANGUN DULUAN</button>
  <button class="answer answer4" value="2">DIBANGUNIN </button>
  <button class="answer answer4" value="3">MASI DI PULAU KAPUK</button>
  <input type="hidden" id="answerBox4" />
  <button class="next" id="btnAnswerBox4">Answer</button>
  <button class="next" id="btnNextBox4" style="display: none;">
    Next
  </button>
  `);
});

// keempat
$("div.ques div.box-q").on("click", "button.answer4", function () {
  const answer = $(this).val();
  $("div.ques div.box-q button.answer").css("background-color", "#ddd");
  $("div.ques div.box-q button.answer").css("color", "black");
  $(this).css("background-color", "#555");
  $(this).css("color", "white");
  $("#answerBox4").val(answer);
});

$("div.ques div.box-q").on("click", "#btnAnswerBox4", function () {
  if ($("#answerBox4").val() !== "") {
    $("div.ques div.box-q button.answer4").prop("disabled", true);
    $(this).hide();
    $("#btnNextBox4").show();
    if ($("#answerBox4").val() === "3") {
      $("div.ques div.box-q button.answer[value='3']").css(
        "background-color",
        "#218838"
      );
      $("div.ques div.box-q div.bukti button[value='4']").html(
        `<i class="fa fa-check-circle"></i>`
      );
    } else {
      $("div.ques div.box-q button.answer[value='3']").css("color", "white");
      const answerDia = $("#answerBox4").val();
      $(`div.ques div.box-q button.answer[value='3']`).css(
        "background-color",
        "#218838"
      );
      $(`div.ques div.box-q button.answer[value='${answerDia}']`).css(
        "background-color",
        "#C82333"
      );
      $("div.ques div.box-q div.bukti button[value='4']").html(
        `<i class="fa fa-times-circle"></i>`
      );
    }
  }
});

$("div.ques div.box-q").on("click", "#btnNextBox4", function () {
  $("div.ques div.box-q div.wrapper-ques").html(`
  <h2 class="title">Question 5 of 9</h2>
  <p class="quest">MAUU KADOOOO?</p>
  <button class="answer answer5" value="1">WAJIB</button>
  <button class="answer answer5" value="2">HARUS</button>
  <button class="answer answer5" value="3">NGIKAN</button>
  <input type="hidden" id="answerBox5" />
  <button class="next" id="btnAnswerBox5">Answer</button>
  <button class="next" id="btnNextBox5" style="display: none;">
    Next
  </button>
  `);
});

// kelima
$("div.ques div.box-q").on("click", "button.answer5", function () {
  const answer = $(this).val();
  $("div.ques div.box-q button.answer").css("background-color", "#ddd");
  $("div.ques div.box-q button.answer").css("color", "black");
  $(this).css("background-color", "#555");
  $(this).css("color", "white");
  $("#answerBox5").val(answer);
});

$("div.ques div.box-q").on("click", "#btnAnswerBox5", function () {
  if ($("#answerBox5").val() !== "") {
    $("div.ques div.box-q button.answer5").prop("disabled", true);
    $(this).hide();
    $("#btnNextBox5").show();
    if ($("#answerBox5").val() === "3") {
      $("div.ques div.box-q button.answer[value='3']").css(
        "background-color",
        "#218838"
      );
      $("div.ques div.box-q div.bukti button[value='5']").html(
        `<i class="fa fa-check-circle"></i>`
      );
    } else {
      $("div.ques div.box-q button.answer[value='3']").css("color", "white");
      const answerDia = $("#answerBox5").val();
      $(`div.ques div.box-q button.answer[value='3']`).css(
        "background-color",
        "#218838"
      );
      $(`div.ques div.box-q button.answer[value='${answerDia}']`).css(
        "background-color",
        "#C82333"
      );
      $("div.ques div.box-q div.bukti button[value='5']").html(
        `<i class="fa fa-times-circle"></i>`
      );
    }
  }
});

$("div.ques div.box-q").on("click", "#btnNextBox5", function () {
  $("div.ques div.box-q div.wrapper-ques").html(`
  <h2 class="title">Question 6 of 9</h2>
  <p class="quest">Alamat penerima</p>
  <button class="answer answer6" value="1">CIKARANG</button>
  <button class="answer answer6" value="2">CIKARANG APA NTAARRR?</button>
  <button class="answer answer6" value="3">BANGKA YG GAADA GOJEK</button>
  <input type="hidden" id="answerBox6" />
  <button class="next" id="btnAnswerBox6">Answer</button>
  <button class="next" id="btnNextBox6" style="display: none;">
    Next
  </button>
  `);
});

// keenam
$("div.ques div.box-q").on("click", "button.answer6", function () {
  const answer = $(this).val();
  $("div.ques div.box-q button.answer").css("background-color", "#ddd");
  $("div.ques div.box-q button.answer").css("color", "black");
  $(this).css("background-color", "#555");
  $(this).css("color", "white");
  $("#answerBox6").val(answer);
});

$("div.ques div.box-q").on("click", "#btnAnswerBox6", function () {
  if ($("#answerBox6").val() !== "") {
    $("div.ques div.box-q button.answer6").prop("disabled", true);
    $(this).hide();
    $("#btnNextBox6").show();
    if ($("#answerBox6").val() === "3") {
      $("div.ques div.box-q button.answer[value='3']").css(
        "background-color",
        "#218838"
      );
      $("div.ques div.box-q div.bukti button[value='6']").html(
        `<i class="fa fa-check-circle"></i>`
      );
    } else {
      $("div.ques div.box-q button.answer[value='3']").css("color", "white");
      const answerDia = $("#answerBox6").val();
      $(`div.ques div.box-q button.answer[value='3']`).css(
        "background-color",
        "#218838"
      );
      $(`div.ques div.box-q button.answer[value='${answerDia}']`).css(
        "background-color",
        "#C82333"
      );
      $("div.ques div.box-q div.bukti button[value='6']").html(
        `<i class="fa fa-times-circle"></i>`
      );
    }
  }
});

$("div.ques div.box-q").on("click", "#btnNextBox6", function () {
  $("div.ques div.box-q div.wrapper-ques").html(`
  <h2 class="title">Question 7 of 9</h2>
  <p class="quest">KAPAN KADO AKAN DITERIMA?</p>
  <button class="answer answer7" value="1">ABIS KOAS</button>
  <button class="answer answer7" value="2">ABIS TUTOR</button>
  <button class="answer answer7" value="3">7 MEI JAM 12 MLM</button>
  <input type="hidden" id="answerBox7" />
  <button class="next" id="btnAnswerBox7">Answer</button>
  <button class="next" id="btnNextBox7" style="display: none;">
    Next
  </button>
  `);
});

// ketujuh
$("div.ques div.box-q").on("click", "button.answer7", function () {
  const answer = $(this).val();
  $("div.ques div.box-q button.answer").css("background-color", "#ddd");
  $("div.ques div.box-q button.answer").css("color", "black");
  $(this).css("background-color", "#555");
  $(this).css("color", "white");
  $("#answerBox7").val(answer);
});

$("div.ques div.box-q").on("click", "#btnAnswerBox7", function () {
  if ($("#answerBox7").val() !== "") {
    $("div.ques div.box-q button.answer7").prop("disabled", true);
    $(this).hide();
    $("#btnNextBox7").show();
    if ($("#answerBox7").val() === "3") {
      $("div.ques div.box-q button.answer[value='3']").css(
        "background-color",
        "#218838"
      );
      $("div.ques div.box-q div.bukti button[value='7']").html(
        `<i class="fa fa-check-circle"></i>`
      );
    } else {
      $("div.ques div.box-q button.answer[value='3']").css("color", "white");
      const answerDia = $("#answerBox7").val();
      $(`div.ques div.box-q button.answer[value='3']`).css(
        "background-color",
        "#218838"
      );
      $(`div.ques div.box-q button.answer[value='${answerDia}']`).css(
        "background-color",
        "#C82333"
      );
      $("div.ques div.box-q div.bukti button[value='7']").html(
        `<i class="fa fa-times-circle"></i>`
      );
    }
  }
});

$("div.ques div.box-q").on("click", "#btnNextBox7", function () {
  $("div.ques div.box-q div.wrapper-ques").html(`
  <h2 class="title">Question 8 of 9</h2>
  <p class="quest">PERTANYAAN2 INI AKAN TERUS ADA HINGGA HARI ULANG TAHUNMU</p>
  <button class="answer answer8" value="1">BIAR LO GA GABUT</button>
  <button class="answer answer8" value="2">IAR NGABUBURIT ADA KERJAAN</button>
  <button class="answer answer8" value="3">GAMAU</button>
  <input type="hidden" id="answerBox8" />
  <button class="next" id="btnAnswerBox8">Answer</button>
  <button class="next" id="btnNextBox8" style="display: none;">
    Next
  </button>
  `);
});

// kedelapan
$("div.ques div.box-q").on("click", "button.answer8", function () {
  const answer = $(this).val();
  $("div.ques div.box-q button.answer").css("background-color", "#ddd");
  $("div.ques div.box-q button.answer").css("color", "black");
  $(this).css("background-color", "#555");
  $(this).css("color", "white");
  $("#answerBox8").val(answer);
});

$("div.ques div.box-q").on("click", "#btnAnswerBox8", function () {
  if ($("#answerBox8").val() !== "") {
    $("div.ques div.box-q button.answer8").prop("disabled", true);
    $(this).hide();
    $("#btnNextBox8").show();
    if ($("#answerBox8").val() === "1") {
      $("div.ques div.box-q button.answer[value='1']").css(
        "background-color",
        "#218838"
      );
      $("div.ques div.box-q div.bukti button[value='8']").html(
        `<i class="fa fa-check-circle"></i>`
      );
    } else {
      $("div.ques div.box-q button.answer[value='1']").css("color", "white");
      const answerDia = $("#answerBox8").val();
      $(`div.ques div.box-q button.answer[value='1']`).css(
        "background-color",
        "#218838"
      );
      $(`div.ques div.box-q button.answer[value='${answerDia}']`).css(
        "background-color",
        "#C82333"
      );
      $("div.ques div.box-q div.bukti button[value='8']").html(
        `<i class="fa fa-times-circle"></i>`
      );
    }
  }
});

$("div.ques div.box-q").on("click", "#btnNextBox8", function () {
  $("div.ques div.box-q div.wrapper-ques").html(`
  <h2 class="title">Question 9 of 9</h2>
  <p class="quest">Apa reaksi anda setelah menyelesaikan pertanyaan terakhir ini?</p>
  <button class="answer answer9" value="1">KETAWA</button>
  <button class="answer answer9" value="2">KAGET</button>
  <button class="answer answer9" value="3">DOUBLE KAGET</button>
  <input type="hidden" id="answerBox9" />
  <button class="next" id="btnAnswerBox9">Answer</button>
  <button class="next" id="btnNextBox9" style="display: none;">
    Finish
  </button>
  `);
});

// kesembilan
$("div.ques div.box-q").on("click", "button.answer9", function () {
  const answer = $(this).val();
  $("div.ques div.box-q button.answer").css("background-color", "#ddd");
  $("div.ques div.box-q button.answer").css("color", "black");
  $(this).css("background-color", "#555");
  $(this).css("color", "white");
  $("#answerBox9").val(answer);
});

$("div.ques div.box-q").on("click", "#btnAnswerBox9", function () {
  if ($("#answerBox9").val() !== "") {
    $("div.ques div.box-q button.answer9").prop("disabled", true);
    $(this).hide();
    $("#btnNextBox9").show();
    if ($("#answerBox9").val() === "3") {
      $("div.ques div.box-q button.answer[value='3']").css(
        "background-color",
        "#218838"
      );
      $("div.ques div.box-q div.bukti button[value='9']").html(
        `<i class="fa fa-check-circle"></i>`
      );
    } else {
      $("div.ques div.box-q button.answer[value='3']").css("color", "white");
      const answerDia = $("#answerBox9").val();
      $(`div.ques div.box-q button.answer[value='3']`).css(
        "background-color",
        "#218838"
      );
      $(`div.ques div.box-q button.answer[value='${answerDia}']`).css(
        "background-color",
        "#C82333"
      );
      $("div.ques div.box-q div.bukti button[value='9']").html(
        `<i class="fa fa-times-circle"></i>`
      );
    }
  }
});

$("div.ques div.box-q").on("click", "#btnNextBox9", function () {
  $("div.ques").hide();
  $("div.countdown-wrapper").show();
});
