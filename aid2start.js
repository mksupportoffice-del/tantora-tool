(function() {
    if (document.getElementById("tantora-aid-box")) return;

    var panel = document.createElement("div");
    panel.id = "tantora-aid-box";
    panel.style.cssText = "position:fixed; top:10px; left:10px; z-index:99999; background:rgba(0,0,0,0.9); color:#fff; padding:12px; border-radius:8px; font-size:12px; max-width:90%; box-shadow: 0 4px 6px rgba(0,0,0,0.3);";
    panel.innerHTML = `
        <div style="font-weight:bold; margin-bottom:8px; color:#ffcc00; text-align:center; font-size:14px;">▶ メンバー回復支援ツール</div>
        <div style="margin-bottom:8px; line-height: 1.4;">
            1. メンバーのIDを入力して移動<br>
            2. ページ内で自動補給を実行
        </div>
        <button id="tantora-id-btn" style="background:#007aff; color:white; border:none; padding:8px 10px; border-radius:4px; font-weight:bold; width:100%; margin-bottom:6px; cursor:pointer;">IDを指定してメンバーへ移動</button>
        <button id="tantora-heal-btn" style="background:#ff4757; color:white; border:none; padding:8px 10px; border-radius:4px; font-weight:bold; width:100%; margin-bottom:6px; cursor:pointer;">このページで回復・補給を実行</button>
        <button id="tantora-close-btn" style="background:#555; color:white; border:none; padding:4px 8px; border-radius:4px; width:100%; cursor:pointer;">パネルを閉じる</button>
    `;
    document.body.appendChild(panel);

    var closeBtn = document.getElementById("tantora-close-btn");
    if (closeBtn) {
        closeBtn.onclick = function() {
            panel.remove();
        };
    }

    var idBtn = document.getElementById("tantora-id-btn");
    if (idBtn) {
        idBtn.onclick = function() {
            var id = prompt('移動したいメンバーのID番号を入力してください\n(例: 7916031)');
            if (id) {
                location.href = 'https://tantora.jp/player?other_id=' + id.trim();
            }
        };
    }

    var healBtn = document.getElementById("tantora-heal-btn");
    if (healBtn) {
        healBtn.onclick = function() {
            var count = 0;
            var elements = document.querySelectorAll('button, input[type="submit"], input[type="button"], a');
            
            for (var i = 0; i < elements.length; i++) {
                var text = elements[i].innerText || elements[i].value || '';
                if (text && (text.includes('回復する') || text.includes('アイテムを使う') || text.includes('使用する') || text.includes('補給する') || text.includes('気合回復') || text.includes('体力回復'))) {
                    elements[i].click();
                    count++;
                }
            }

            if (count > 0) {
                alert(count + '個の回復・補給ボタンを実行しました！');
            } else {
                alert('対象の回復ボタンが見つかりませんでした。');
            }
        };
    }
})();
