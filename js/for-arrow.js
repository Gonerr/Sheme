// Вариант JavaScript для добавления стрелок
const parent = document.getElementById('parent');
const children = document.querySelectorAll('.child');
const children1 = document.querySelectorAll('.child1');
const parentRect = parent.getBoundingClientRect();

// Для компонентов, не лежащих в одной плоскости X с родительским компонентом
children.forEach(child => {
    const childRect = child.getBoundingClientRect();

    // Расчет центра родительского элемента
    const parentCenterX = parentRect.left + parentRect.width / 2;
    const parentCenterY = parentRect.top + parentRect.height / 2;

    // Расчет центра дочернего элемента
    const childCenterX = childRect.left + childRect.width / 2;
    const childCenterY = childRect.top;

    // Расчет угла и расстояния между центрами
    const dx = childCenterX - parentCenterX;
    const dy = childCenterY - parentCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy)-15;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    // Для корректной отрисовки стрелки
    const arrow = document.createElement('div');
    arrow.className = 'arrow';
    arrow.style.width = `${distance}px`;
    arrow.style.transform = `rotate(${angle}deg)`;
    arrow.style.top = `${parentCenterY}px`;
    arrow.style.left = `${parentCenterX}px`;

    document.body.appendChild(arrow);
});

// Для компонентов, лежащих в одной плоскости X с родительским компонентом
children1.forEach(child => {
    const childRect = child.getBoundingClientRect();

    // Расчет центра родительского элемента
    const parentCenterX = parentRect.left + parentRect.width / 2;
    const parentCenterY = parentRect.top + parentRect.height / 2;

    // Расчет центра дочернего элемента
    const childCenterX = childRect.left + childRect.width / 2;
    const childCenterY = childRect.top + childRect.height / 2;

    // Расчет угла и расстояния между центрами
    const dx = childCenterX - parentCenterX;
    const dy = childCenterY - parentCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy)-130;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    // Для корректной отрисовки стрелки
    const arrow = document.createElement('div');
    arrow.className = 'arrow';
    arrow.style.width = `${distance}px`;
    arrow.style.transform = `rotate(${angle}deg)`;
    arrow.style.top = `${parentCenterY}px`;
    arrow.style.left = `${parentCenterX}px`;

    document.body.appendChild(arrow);
});
