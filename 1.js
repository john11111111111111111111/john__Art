// دالة التمرير الناعم إلى الأقسام عند الضغط على الأزرار
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
