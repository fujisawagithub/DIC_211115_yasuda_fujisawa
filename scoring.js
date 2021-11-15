$(document).ready(function() {
  function score_indicate() {
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    return subject_points;
  };

  function score_sum() {
    let subject_points = score_indicate();
    let sum = subject_points.reduce(function(result, point) {return result + point});
    return sum;
  };

  function score_average() {
    let subject_points = score_indicate();
    let sum = score_sum();
    let avg = (sum / subject_points.length);
    return avg;
  };

  function get_achievement() {
    let score = score_average();
    if (score >= 80) {
      return 'A';
    } else if (score >= 60) {
      return 'B';
    } else if (score >= 40) {
      return 'C';
    } else {
      return 'D';
    }
  };

  function get_pass_or_failure() {
    let subject_points = score_indicate();
    for (let i = 0; i < subject_points.length; i++) {
      if (subject_points[i] < 60) {
        return '不合格';
      }
    }
    return '合格';
  };

  function judgement() {
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    $("#sum_indicate").text(score_sum());
    $("#average_indicate").text(score_average());
  });

  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });

  $('#btn-judge').click(function() {
    $('#judge').text(get_pass_or_failure());
  });

  $('#btn-declaration').click(function() {
    $('#alert-indicate').remove();
    judgement();
  });
});
