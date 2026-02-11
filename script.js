// Variables globales
let cardFlipped = false;

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeEmojiRain();
    initializeFloatingEmojis();
    addScrollAnimations();
});

// ============================================
// 1. FUNCIÓN: Voltear Tarjeta
// ============================================
function flipCard() {
    const card = document.getElementById('mainCard');
    cardFlipped = !cardFlipped;

    if (cardFlipped) {
        card.style.transform = 'perspective(1000px) rotateY(180deg)';
        setTimeout(() => {
            card.innerHTML = `
                <div class="card-front">
                    <div class="card-content">
                        <div class="message-box">
                            <p class="message-text" style="font-size: 1.5rem; font-weight: 700; margin: 20px 0;">
                                <svg class="icon-svg" viewBox="0 0 24 24" style="width: 40px; height: 40px; display: inline-block; margin: 0 5px;">
                                    <use href="#celebration-icon"/>
                                </svg>
                                Espero que disfrutes esta tarjeta
                                <svg class="icon-svg" viewBox="0 0 24 24" style="width: 40px; height: 40px; display: inline-block; margin: 0 5px;">
                                    <use href="#celebration-icon"/>
                                </svg>
                            </p>
                            <p class="message-text">
                                Este pequeño mundo digital que creé es un reflejo de lo importante que eres para mí.
                                Hace scroll para descubrir más sorpresas.
                            </p>
                            <button class="btn btn-primary" style="margin-top: 25px;" onclick="flipCardBack()">
                                Volver
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }, 500);
    }
}

function flipCardBack() {
    const card = document.getElementById('mainCard');
    card.style.transform = 'perspective(1000px) rotateY(0deg)';
    cardFlipped = false;
    setTimeout(() => {
        location.reload();
    }, 500);
}

// ============================================
// 2. FUNCIÓN: Lluvia de Emojis
// ============================================
function initializeEmojiRain() {
    const container = document.getElementById('emojiRain');
    const icons = [
        { id: 'laugh-icon', class: 'laugh-animated' },
        { id: 'strength-icon', class: 'strength-animated' },
        { id: 'books-icon', class: 'books-animated' },
        { id: 'target-icon', class: 'target-animated' },
        { id: 'sparkle-icon', class: 'sparkle-animated' },
        { id: 'heart-icon', class: 'heart-animated' },
        { id: 'star-icon', class: 'star-animated' },
    ];
    
    for (let i = 0; i < 30; i++) {
        const iconData = icons[Math.floor(Math.random() * icons.length)];
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('class', `icon-svg ${iconData.class}`);
        svg.style.position = 'absolute';
        svg.style.left = Math.random() * 100 + '%';
        svg.style.top = Math.random() * 100 + '%';
        svg.style.opacity = Math.random() * 0.5 + 0.1;
        svg.style.width = Math.random() * 20 + 10 + 'px';
        svg.style.height = svg.style.width;
        
        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + iconData.id);
        svg.appendChild(use);
        
        container.appendChild(svg);
    }
}

// ============================================
// 3. FUNCIÓN: Emojis Flotantes Adicionales
// ============================================
function initializeFloatingEmojis() {
    const container = document.querySelector('.floating-particles');
    const icons = [
        { id: 'sparkle-icon', class: 'sparkle-animated' },
        { id: 'heart-icon', class: 'heart-animated' },
        { id: 'star-icon', class: 'star-animated' },
    ];
    
    for (let i = 0; i < 5; i++) {
        const iconData = icons[Math.floor(Math.random() * icons.length)];
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('class', `icon-svg ${iconData.class}`);
        svg.style.position = 'absolute';
        svg.style.left = Math.random() * 100 + '%';
        svg.style.top = Math.random() * 100 + '%';
        svg.style.opacity = Math.random() * 0.3 + 0.1;
        svg.style.width = Math.random() * 30 + 20 + 'px';
        svg.style.height = svg.style.width;
        svg.style.pointerEvents = 'none';
        
        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + iconData.id);
        svg.appendChild(use);
        
        container.appendChild(svg);
    }
}

// ============================================
// 4. FUNCIÓN: Confetti
// ============================================
function triggerConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];
    const icons = [
        { id: 'celebration-icon', class: 'celebration-animated' },
        { id: 'star-icon', class: 'star-animated' },
        { id: 'heart-icon', class: 'heart-animated' },
        { id: 'sparkle-icon', class: 'sparkle-animated' },
    ];
    
    for (let i = 0; i < 100; i++) {
        const iconData = icons[Math.floor(Math.random() * icons.length)];
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('class', `confetti icon-svg ${iconData.class}`);
        svg.style.color = colors[Math.floor(Math.random() * colors.length)];
        svg.style.left = Math.random() * 100 + '%';
        svg.style.top = '-10px';
        svg.style.width = Math.random() * 20 + 15 + 'px';
        svg.style.height = svg.style.width;
        svg.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        
        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + iconData.id);
        svg.appendChild(use);
        
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 0.3;
        
        svg.style.animation = `confettiFall ${duration}s linear ${delay}s forwards`;
        
        container.appendChild(svg);
    }
    
    // Crear animación de confetti
    if (!document.getElementById('confetti-animation')) {
        const style = document.createElement('style');
        style.id = 'confetti-animation';
        style.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Limpiar después de 5 segundos
    setTimeout(() => {
        container.innerHTML = '';
    }, 5000);
}

// ============================================
// 5. FUNCIÓN: Momento Especial
// ============================================
function showMoment(element) {
    const momentTitle = element.querySelector('.moment-title').textContent;
    
    // Animación de click
    element.style.animation = 'pulse 0.5s ease';
    
    setTimeout(() => {
        element.style.animation = 'none';
    }, 500);
    
    // Pequeña notificación
    showNotification(`✨ ${momentTitle} ✨`);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.innerHTML = `
        <svg class="icon-svg" viewBox="0 0 24 24" style="width: 24px; height: 24px; display: inline-block; margin-right: 8px; vertical-align: middle;">
            <use href="#sparkle-icon"/>
        </svg>
        ${message}
        <svg class="icon-svg" viewBox="0 0 24 24" style="width: 24px; height: 24px; display: inline-block; margin-left: 8px; vertical-align: middle;">
            <use href="#sparkle-icon"/>
        </svg>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px 40px;
        border-radius: 50px;
        font-weight: 700;
        font-size: 1.1rem;
        z-index: 10000;
        animation: notificationSlide 0.5s ease;
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'notificationSlideOut 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 2500);
}

// ============================================
// 6. FUNCIÓN: Revelar Sorpresas
// ============================================
function revealSurprise(id) {
    const element = document.getElementById(id);
    
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
        element.classList.add('hidden');
    } else {
        // Cerrar otras sorpresas
        document.querySelectorAll('.surprise-content.visible').forEach(el => {
            if (el.id !== id) {
                el.classList.remove('visible');
                el.classList.add('hidden');
            }
        });
        
        element.classList.remove('hidden');
        element.classList.add('visible');
        
        // Scroll suave
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    }
}

// ============================================
// 7. FUNCIÓN: Celebración Final
// ============================================
function createFinalCelebration() {
    // Confetti extra
    triggerConfetti();
    
    // Crear múltiples confetti
    setTimeout(triggerConfetti, 200);
    setTimeout(triggerConfetti, 400);
    
    // Animación de vibración
    document.body.style.animation = 'vibrate 0.5s ease';
    setTimeout(() => {
        document.body.style.animation = 'none';
    }, 500);
    
    // Sonido (emoji celebración)
    showNotification('🎆 ¡¡DIANA, ERES INCREÍBLE!! 🎆');
    
    // Crear animación adicional
    createHeartRain();
}

function createHeartRain() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = '❤️';
            heart.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: -20px;
                font-size: ${Math.random() * 30 + 20}px;
                z-index: 9998;
                pointer-events: none;
                animation: heartFallAnimation ${Math.random() * 3 + 3}s linear forwards;
            `;
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 100);
    }
}

// ============================================
// 8. ANIMACIONES CON SCROLL
// ============================================
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// 9. ANIMACIONES CSS GLOBALES
// ============================================
function addGlobalAnimations() {
    if (!document.getElementById('global-animations')) {
        const style = document.createElement('style');
        style.id = 'global-animations';
        style.textContent = `
            @keyframes vibrate {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
            
            @keyframes notificationSlide {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
            
            @keyframes notificationSlideOut {
                from {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-50px);
                }
            }
            
            @keyframes heartFallAnimation {
                to {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                25% { transform: translateY(-10px) rotate(5deg); }
                50% { transform: translateY(-20px) rotate(0deg); }
                75% { transform: translateY(-10px) rotate(-5deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Inicializar animaciones globales
addGlobalAnimations();

// ============================================
// 10. EFECTOS DE MOUSE
// ============================================
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.moment-card, .feature-box');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    });
});

// ============================================
// 11. INTERACCIÓN CON TECLAS
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        triggerConfetti();
    }
    
    if (e.key === 'Enter') {
        flipCard();
    }
});

// ============================================
// 12. EFECTO PARALLAX
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingParticles = document.querySelector('.floating-particles');
    
    if (floatingParticles) {
        floatingParticles.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// 13. FUNCIÓN BONUS: Interactividad con Click en elementos
// ============================================
document.querySelectorAll('.section-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target !== this && !e.target.closest('.btn') && !e.target.closest('.moment-card') && !e.target.closest('.feature-box')) {
            return;
        }
    });
});

// ============================================
// 14. EASTER EGG: Konami Code
// ============================================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    showNotification('🎮 ¡EASTER EGG ACTIVADO! 🎮');
    
    // Lluvia de corazones intenso
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createHeartRain();
            triggerConfetti();
        }, i * 300);
    }
    
    // Cambiar color de fondo
    document.body.style.animation = 'rainbowBackground 3s ease';
}

// ============================================
// 15. TEMA ADAPTATIVO
// ============================================
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.style.filter = 'brightness(0.9)';
}

// Agregar botón secreto de compartir
window.addEventListener('load', () => {
    const shareBtn = document.createElement('button');
    shareBtn.textContent = '📱 Compartir';
    shareBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        padding: 15px 25px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        font-weight: 700;
        z-index: 1000;
        box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        font-size: 1rem;
    `;
    
    shareBtn.addEventListener('mouseover', () => {
        shareBtn.style.transform = 'scale(1.1)';
        shareBtn.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.6)';
    });
    
    shareBtn.addEventListener('mouseout', () => {
        shareBtn.style.transform = 'scale(1)';
        shareBtn.style.boxShadow = '0 5px 20px rgba(102, 126, 234, 0.4)';
    });
    
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: '¡Tarjeta Especial para Diana!',
                text: 'Mi mejor amiga merece esto en el día de los amigos 💖',
                url: window.location.href
            });
        } else {
            showNotification('💌 Copia el link para compartir');
        }
    });
    
    document.body.appendChild(shareBtn);
});

console.log('🎉 ¡Tarjeta iniciada! Presiona espacio para celebrar, entra el Konami Code para sorpresa. 🎉');
