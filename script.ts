// ============================================
// TIPOS Y INTERFACES
// ============================================

interface IconData {
    emoji: string;
    animation: string;
}

interface Confetti {
    element: HTMLElement;
    duration: number;
}

interface MomentData {
    title: string;
    description: string;
}

// ============================================
// VARIABLES GLOBALES
// ============================================

let cardFlipped: boolean = false;
const EMOJI_ICONS: string[] = ['😂', '💪', '📚', '🎯', '✨', '❤️', '🌟', '💖'];
const FLOATING_EMOJIS: string[] = ['✨', '💫', '🌟', '💝'];

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', (): void => {
    initializeEmojiRain();
    initializeFloatingEmojis();
    addScrollAnimations();
    addGlobalAnimations();
});

// ============================================
// 1. FUNCIÓN: Voltear Tarjeta
// ============================================

function flipCard(): void {
    const card: HTMLElement | null = document.getElementById('mainCard');
    if (!card) return;

    cardFlipped = !cardFlipped;

    if (cardFlipped) {
        card.style.transform = 'perspective(1000px) rotateY(180deg)';
        setTimeout((): void => {
            card.innerHTML = `
                <div class="card-front">
                    <div class="card-content">
                        <div class="message-box">
                            <p class="message-text" style="font-size: 1.5rem; font-weight: 700; margin: 20px 0;">
                                🎉 Espero que disfrutes esta tarjeta 🎉
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

function flipCardBack(): void {
    const card: HTMLElement | null = document.getElementById('mainCard');
    if (!card) return;

    card.style.transform = 'perspective(1000px) rotateY(0deg)';
    cardFlipped = false;
    setTimeout((): void => {
        location.reload();
    }, 500);
}

// ============================================
// 2. FUNCIÓN: Lluvia de Iconos SVG
// ============================================

function initializeEmojiRain(): void {
    const container: HTMLElement | null = document.getElementById('emojiRain');
    if (!container) return;

    for (let i: number = 0; i < 30; i++) {
        const emoji: HTMLSpanElement = document.createElement('span');
        emoji.textContent = EMOJI_ICONS[Math.floor(Math.random() * EMOJI_ICONS.length)];
        emoji.style.position = 'absolute';
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.top = Math.random() * 100 + '%';
        emoji.style.opacity = String(Math.random() * 0.5 + 0.1);
        emoji.style.fontSize = (Math.random() * 20 + 10) + 'px';
        emoji.style.animation = `float ${Math.random() * 3 + 2}s infinite ease-in-out`;
        container.appendChild(emoji);
    }
}

// ============================================
// 3. FUNCIÓN: Iconos Flotantes Adicionales
// ============================================

function initializeFloatingEmojis(): void {
    const container: HTMLElement | null = document.querySelector('.floating-particles');
    if (!container) return;

    for (let i: number = 0; i < 5; i++) {
        const emoji: HTMLSpanElement = document.createElement('span');
        emoji.textContent = FLOATING_EMOJIS[Math.floor(Math.random() * FLOATING_EMOJIS.length)];
        emoji.style.position = 'absolute';
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.top = Math.random() * 100 + '%';
        emoji.style.opacity = String(Math.random() * 0.3 + 0.1);
        emoji.style.fontSize = (Math.random() * 30 + 20) + 'px';
        emoji.style.pointerEvents = 'none';
        container.appendChild(emoji);
    }
}

// ============================================
// 4. FUNCIÓN: Confetti Explosivo
// ============================================

function triggerConfetti(): void {
    const container: HTMLElement | null = document.getElementById('confetti-container');
    if (!container) return;

    container.innerHTML = '';
    
    const colors: string[] = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];
    const confettiEmojis: string[] = ['🎉', '🎊', '✨', '❤️', '💫', '🌟', '💖'];
    
    for (let i: number = 0; i < 100; i++) {
        const confetti: HTMLDivElement = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
        confetti.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        confetti.style.zIndex = '9999';
        confetti.style.position = 'absolute';
        
        const duration: number = Math.random() * 3 + 2;
        const delay: number = Math.random() * 0.3;
        
        confetti.style.animation = `confettiFall ${duration}s linear ${delay}s forwards`;
        
        container.appendChild(confetti);
    }
    
    addConfettiAnimation();
    
    setTimeout((): void => {
        container.innerHTML = '';
    }, 5000);
}

function addConfettiAnimation(): void {
    if (!document.getElementById('confetti-animation')) {
        const style: HTMLStyleElement = document.createElement('style');
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
}

// ============================================
// 5. FUNCIÓN: Mostrar Momento Especial
// ============================================

function showMoment(element: HTMLElement): void {
    const momentTitle: string = (element.querySelector('.moment-title') as HTMLElement)?.textContent || 'Momento';
    
    element.style.animation = 'pulse 0.5s ease';
    
    setTimeout((): void => {
        element.style.animation = 'none';
    }, 500);
    
    showNotification(`✨ ${momentTitle} ✨`);
}

// ============================================
// 6. FUNCIÓN: Notificaciones
// ============================================

function showNotification(message: string): void {
    const notification: HTMLDivElement = document.createElement('div');
    notification.textContent = message;
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
    `;
    
    document.body.appendChild(notification);
    
    setTimeout((): void => {
        notification.style.animation = 'notificationSlideOut 0.5s ease';
        setTimeout((): void => notification.remove(), 500);
    }, 2500);
}

// ============================================
// 7. FUNCIÓN: Revelar Sorpresas
// ============================================

function revealSurprise(id: string): void {
    const element: HTMLElement | null = document.getElementById(id);
    if (!element) return;
    
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
        element.classList.add('hidden');
    } else {
        document.querySelectorAll<HTMLElement>('.surprise-content.visible').forEach((el: HTMLElement): void => {
            if (el.id !== id) {
                el.classList.remove('visible');
                el.classList.add('hidden');
            }
        });
        
        element.classList.remove('hidden');
        element.classList.add('visible');
        
        setTimeout((): void => {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    }
}

// ============================================
// 8. FUNCIÓN: Celebración Final
// ============================================

function createFinalCelebration(): void {
    triggerConfetti();
    
    setTimeout(triggerConfetti, 200);
    setTimeout(triggerConfetti, 400);
    
    document.body.style.animation = 'vibrate 0.5s ease';
    setTimeout((): void => {
        document.body.style.animation = 'none';
    }, 500);
    
    showNotification('¡¡DIANA, ERES INCREÍBLE!!');
    
    createHeartRain();
}

function createHeartRain(): void {
    for (let i: number = 0; i < 30; i++) {
        setTimeout((): void => {
            const heart: HTMLDivElement = document.createElement('div');
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
            
            setTimeout((): void => heart.remove(), 5000);
        }, i * 100);
    }
}

// ============================================
// 9. ANIMACIONES CON SCROLL
// ============================================

function addScrollAnimations(): void {
    const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry: IntersectionObserverEntry): void => {
            if (entry.isIntersecting) {
                (entry.target as HTMLElement).style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll<HTMLElement>('.section').forEach((section: HTMLElement): void => {
        observer.observe(section);
    });
}

// ============================================
// 10. ANIMACIONES GLOBALES
// ============================================

function addGlobalAnimations(): void {
    if (!document.getElementById('global-animations')) {
        const style: HTMLStyleElement = document.createElement('style');
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

// ============================================
// 11. EFECTOS DE MOUSE
// ============================================

document.addEventListener('mousemove', (e: MouseEvent): void => {
    const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.moment-card, .feature-box');
    
    cards.forEach((card: HTMLElement): void => {
        const rect: DOMRect = card.getBoundingClientRect();
        const x: number = e.clientX - rect.left;
        const y: number = e.clientY - rect.top;
        
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    });
});

// ============================================
// 12. INTERACCIÓN CON TECLAS
// ============================================

document.addEventListener('keydown', (e: KeyboardEvent): void => {
    if (e.code === 'Space') {
        e.preventDefault();
        triggerConfetti();
    }
    
    if (e.key === 'Enter') {
        flipCard();
    }
});

// ============================================
// 13. EFECTO PARALLAX
// ============================================

window.addEventListener('scroll', (): void => {
    const scrolled: number = window.pageYOffset;
    const floatingParticles: HTMLElement | null = document.querySelector('.floating-particles');
    
    if (floatingParticles) {
        floatingParticles.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// 14. EASTER EGG: Konami Code
// ============================================

const konamiCode: string[] = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex: number = 0;

document.addEventListener('keydown', (e: KeyboardEvent): void => {
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

function activateEasterEgg(): void {
    showNotification('¡EASTER EGG ACTIVADO!');
    
    for (let i: number = 0; i < 3; i++) {
        setTimeout((): void => {
            createHeartRain();
            triggerConfetti();
        }, i * 300);
    }
}

// ============================================
// 15. BOTÓN DE COMPARTIR
// ============================================

window.addEventListener('load', (): void => {
    const shareBtn: HTMLButtonElement = document.createElement('button');
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
    
    shareBtn.addEventListener('mouseover', (): void => {
        shareBtn.style.transform = 'scale(1.1)';
        shareBtn.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.6)';
    });
    
    shareBtn.addEventListener('mouseout', (): void => {
        shareBtn.style.transform = 'scale(1)';
        shareBtn.style.boxShadow = '0 5px 20px rgba(102, 126, 234, 0.4)';
    });
    
    shareBtn.addEventListener('click', (): void => {
        const shareData: ShareData = {
            title: '¡Tarjeta Especial para Diana!',
            text: 'Mi mejor amiga merece esto en el día de los amigos 💖',
            url: window.location.href
        };

        if (navigator.share) {
            navigator.share(shareData).catch((err: Error): void => {
                console.log('Error al compartir:', err);
            });
        } else {
            showNotification('💌 Copia el link para compartir');
        }
    });
    
    document.body.appendChild(shareBtn);
});

console.log('🎉 ¡Tarjeta con TypeScript iniciada! Presiona espacio para celebrar, entra el Konami Code para sorpresa. 🎉');
