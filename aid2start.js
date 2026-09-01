(function() {
    // 二重起動防止用
    if (document.getElementById("tantora-aid-box")) return;

    // 操作パネルを画面内に作成（スマホでも見やすいように表示）
    var panel = document.createElement("div");
    panel.id = "tantora-aid-box";
    panel.style.cssText = "position:fixed; top:10px; left:10px; z-index:99999; background:rgba(0,0,0,0.85); color:#fff; padding:10px; border-radius:8px; font-size:12px; max-width:90%;";
    panel.innerHTML = `
        <div style="font-weight:bold; margin-bottom:6px; color:#ffcc00; text-align:center;">▶ 回復アイテム補給支援</div>
        <div style="margin-bottom:6px;">
            1. メンバー一覧で対象を選ぶか、IDを入力<br>
            2. 下のボタンで一括補給！
        </div>
        <button id="tantora-heal-btn" style="background:#ff4757; color:#white; border:none; padding:8px 12px; border-radius:4px; font-weight:bold; width:100%; cursor:pointer;">HP・体力・気合を補給する</button>
        <button id="tantora-close-btn" style="background:#555; color:#white; border:none; padding:4px 8px; border-radius:4px; margin-top:6px; width:100%; cursor:pointer;">閉じる</button>
    `;
    document.body.appendChild(panel);

    // 閉じるボタンの動作
    document.getElementById("tantora-close-btn").onclick = function() {
        panel.remove();
    };

    // 「補給する」ボタンを押したときの動作
    document.getElementById("tantora-heal-btn").onclick = function() {
        var count = 0;
        
        // ページ内にある「回復」「使う」「使用」「アイテム」などのボタンやリンクを自動で探して押す
        var elements = document.querySelectorAll('button, a, input[type="submit"], input[type="button"]');
        
        for (var i = 0; i < elements.length; i++) {
            var text = elements[i].innerText || elements[i].value || '';
            // HP、体力、気合、回復、イマンなどのキーワードに反応して自動クリック
            if (text && (text.includes('回復') || text.includes('使う') || text.includes('使用') || text.includes('HP') || text.includes('体力') || text.includes('気合'))) {
                elements[i].click();
                count++;
            }
        }

        if (count > 0) {
            alert(count + '個の補給・回復ボタンを実行しました！');
        } else {
            alert('このページに対象の補給ボタンが見つかりませんでした。\nメンバーの個別ページを開いてから実行してください。');
        }
    };
})();
