let clickCount = 0;
let lastClickTime = 0;

document.getElementById('mainTitle').addEventListener('dblclick', function() {
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.write(`
        <html>
        <head>
            <title>Hakkımızda</title>
            <style>
                body { 
                    font-family: Arial; 
                    padding: 20px; 
                    background-color: #f0f0f0;
                    margin: 0;
                }
                .container {
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    max-width: 700px;
                    margin: 20px auto;
                }
                h2 { 
                    color: #333;
                    text-align: center;
                }
                .info { 
                    margin: 15px 0; 
                    padding: 15px;
                    background: #f8f8f8;
                    border-radius: 5px;
                }
                .vision-mission {
                    margin-top: 15px;
                    line-height: 1.6;
                }
                .vision-mission h4 {
                    color: #4CAF50;
                    margin: 15px 0 5px 0;
                }
                .social-links {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    margin-top: 20px;
                    justify-content: center;
                }
                .social-link {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    color: white;
                    transition: all 0.3s;
                    position: relative;
                    overflow: hidden;
                }
                .social-link:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                }
                .social-link span {
                    font-size: 24px;
                    margin-bottom: 5px;
                }
                .social-link p {
                    margin: 0;
                    font-size: 14px;
                    text-align: center;
                }
                .facebook { 
                    background: linear-gradient(45deg, #1877F2, #3b5998);
                }
                .facebook:hover { 
                    background: linear-gradient(45deg, #3b5998, #1877F2);
                }
                .instagram { 
                    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
                }
                .instagram:hover {
                    background: linear-gradient(45deg, #bc1888, #cc2366, #dc2743, #e6683c, #f09433);
                }
                .x { 
                    background: linear-gradient(45deg, #000000, #333333);
                }
                .x:hover { 
                    background: linear-gradient(45deg, #333333, #000000);
                }
                .linkedin { 
                    background: linear-gradient(45deg, #0A66C2, #0077b5);
                }
                .linkedin:hover {
                    background: linear-gradient(45deg, #0077b5, #0A66C2);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Hakkımızda</h2>
                <div class="info">
                    <h3>👋 Biz Kimiz</h3>
                    <div class="vision-mission">
                        <h4>🌿 Vizyonumuz</h4>
                        <p>Biz, Yaşayan Tasarım Topluluğu olarak, doğayla uyumlu ve sürdürülebilir peyzaj çözümleriyle yaşanabilir bir çevre yaratmayı hedefliyoruz. Doğanın gücünden ilham alarak, insanların ve doğanın birlikte var olabileceği harmonik mekanlar tasarlamak için çaba sarf ediyoruz.</p>
                        
                        <h4>🎯 Misyonumuz</h4>
                        <p>Yaşayan Tasarım Topluluğu olarak, doğal ve yapay unsurları bir araya getirerek estetik ve fonksiyonel peyzaj alanları oluşturmayı amaçlıyoruz. Bu doğrultuda, eğitim, bilinçlendirme ve uygulama faaliyetleri düzenleyerek öğrencilerin ve toplumun çevre bilinci ve peyzaj tasarımı konularında yetkinliklerini artırmayı hedefliyoruz. Ayrıca, yerel topluluklarla iş birliği yaparak sosyal sorumluluk projeleri gerçekleştiriyor, yaşanabilir bir çevre için farkındalık oluşturmayı amaçlıyoruz.</p>
                    </div>
                </div>
                <div class="info">
                    <h3>🌐 Sosyal Medya Hesaplarımız</h3>
                    <div class="social-links">
                        <a class="social-link facebook" href="https://facebook.com/yasayantasarim_" target="_blank">
                            <span>👥</span>
                            <p>Facebook</p>
                        </a>
                        <a class="social-link instagram" href="https://instagram.com/yasayantasarim_" target="_blank">
                            <span>📸</span>
                            <p>Instagram</p>
                        </a>
                        <a class="social-link x" href="https://x.com/yasayantasarim_" target="_blank">
                            <span>🐦</span>
                            <p>X (Twitter)</p>
                        </a>
                        <a class="social-link linkedin" href="https://linkedin.com/company/yasayantasarim_" target="_blank">
                            <span>💼</span>
                            <p>LinkedIn</p>
                        </a>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
});

function addTask() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (input.value.trim() === '') {
        alert('Lütfen bir görev girin!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${input.value}
        <button class="delete-btn" onclick="this.parentElement.remove()">Sil</button>
    `;
    
    taskList.appendChild(li);
    input.value = '';
}

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
}); 