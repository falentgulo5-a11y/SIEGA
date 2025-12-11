// Data Kurikulum untuk setiap program
const curriculumData = {
    SI: {
        title: 'Sistem Informasi (SI)',
        semesters: [
            {
                semester: 'Semester 1',
                courses: [
                    {name: 'Pengantar Sistem Informasi', sks: 3, desc: 'Konsep dasar SI'},
                    {name: 'Algoritma & Pemrograman', sks: 4, desc: 'Logika pemrograman'},
                    {name: 'Matematika Diskrit', sks: 3, desc: 'Matematika komputer'},
                    {name: 'Basis Data', sks: 3, desc: 'Pengelolaan database'},
                    {name: 'Sistem Operasi', sks: 3, desc: 'Manajemen sistem operasi'}
                ]
            },
            {
                semester: 'Semester 2',
                courses: [
                    {name: 'Pemrograman Berorientasi Objek', sks: 4, desc: 'OOP dengan Java'},
                    {name: 'Analisis & Desain SI', sks: 3, desc: 'Metodologi pengembangan'},
                    {name: 'Struktur Data', sks: 3, desc: 'Organisasi data'},
                    {name: 'Jaringan Komputer', sks: 3, desc: 'Konsep jaringan'},
                    {name: 'Web Programming', sks: 4, desc: 'Pemrograman web'}
                ]
            },
            {
                semester: 'Semester 3',
                courses: [
                    {name: 'Database Lanjut', sks: 3, desc: 'Optimasi database'},
                    {name: 'Rekayasa Perangkat Lunak', sks: 3, desc: 'Software engineering'},
                    {name: 'Enterprise Information System', sks: 3, desc: 'Sistem informasi enterprise'},
                    {name: 'Mobile Programming', sks: 4, desc: 'Pemrograman mobile'},
                    {name: 'Business Intelligence', sks: 3, desc: 'Analisis data bisnis'}
                ]
            }
        ]
    },
    EC: {
        title: 'E-Commerce (EC)',
        semesters: [
            {
                semester: 'Semester 1',
                courses: [
                    {name: 'Pengantar E-Commerce', sks: 3, desc: 'Konsep bisnis digital'},
                    {name: 'Digital Marketing', sks: 3, desc: 'Strategi pemasaran online'},
                    {name: 'Web Programming', sks: 4, desc: 'Pemrograman web'},
                    {name: 'Manajemen Bisnis', sks: 3, desc: 'Prinsip bisnis'},
                    {name: 'Basis Data', sks: 3, desc: 'Database management'}
                ]
            },
            {
                semester: 'Semester 2',
                courses: [
                    {name: 'Marketplace Development', sks: 4, desc: 'Membangun platform'},
                    {name: 'Data Analytics', sks: 3, desc: 'Analisis data bisnis'},
                    {name: 'Payment Gateway', sks: 3, desc: 'Sistem pembayaran'},
                    {name: 'Customer Relationship Mgmt', sks: 3, desc: 'Manajemen pelanggan'},
                    {name: 'SEO & SEM', sks: 3, desc: 'Optimasi mesin pencari'}
                ]
            },
            {
                semester: 'Semester 3',
                courses: [
                    {name: 'E-Business Strategy', sks: 3, desc: 'Strategi bisnis online'},
                    {name: 'Social Media Marketing', sks: 3, desc: 'Marketing media sosial'},
                    {name: 'Supply Chain Management', sks: 3, desc: 'Manajemen rantai pasokan'},
                    {name: 'E-Commerce Analytics', sks: 3, desc: 'Analitik e-commerce'},
                    {name: 'Mobile Commerce', sks: 4, desc: 'Commerce di mobile'}
                ]
            }
        ]
    },
    GT: {
        title: 'Game Teknologi (GT)',
        semesters: [
            {
                semester: 'Semester 1',
                courses: [
                    {name: 'Game Design Fundamentals', sks: 3, desc: 'Prinsip desain game'},
                    {name: 'Pemrograman Game', sks: 4, desc: 'Coding untuk game'},
                    {name: '2D Game Development', sks: 3, desc: 'Membuat game 2D'},
                    {name: 'Digital Art', sks: 3, desc: 'Seni digital'},
                    {name: 'Algoritma & Pemrograman', sks: 4, desc: 'Logika pemrograman'}
                ]
            },
            {
                semester: 'Semester 2',
                courses: [
                    {name: '3D Modeling & Animation', sks: 4, desc: 'Pembuatan aset 3D'},
                    {name: 'Game Engine (Unity/Unreal)', sks: 4, desc: 'Menggunakan engine'},
                    {name: 'Game Physics', sks: 3, desc: 'Fisika dalam game'},
                    {name: 'Sound Design', sks: 2, desc: 'Desain audio'},
                    {name: 'Character Design', sks: 3, desc: 'Desain karakter'}
                ]
            },
            {
                semester: 'Semester 3',
                courses: [
                    {name: 'Advanced Game Development', sks: 4, desc: 'Pengembangan lanjut'},
                    {name: 'Virtual Reality', sks: 3, desc: 'Teknologi VR'},
                    {name: 'Augmented Reality', sks: 3, desc: 'Teknologi AR'},
                    {name: 'Game AI', sks: 3, desc: 'Artificial Intelligence'},
                    {name: 'Level Design', sks: 3, desc: 'Desain level game'}
                ]
            }
        ]
    },
    AKSI: {
        title: 'Akuntansi Sistem Informasi (AKSI)',
        semesters: [
            {
                semester: 'Semester 1',
                courses: [
                    {name: 'Pengantar Akuntansi', sks: 3, desc: 'Dasar akuntansi'},
                    {name: 'Sistem Informasi Akuntansi', sks: 3, desc: 'SI untuk akuntansi'},
                    {name: 'Pemrograman Bisnis', sks: 4, desc: 'Coding untuk bisnis'},
                    {name: 'Matematika Bisnis', sks: 3, desc: 'Perhitungan bisnis'},
                    {name: 'Basis Data', sks: 3, desc: 'Database management'}
                ]
            },
            {
                semester: 'Semester 2',
                courses: [
                    {name: 'Enterprise Resource Planning', sks: 4, desc: 'Sistem ERP'},
                    {name: 'Audit Teknologi Informasi', sks: 3, desc: 'Audit sistem TI'},
                    {name: 'Manajemen Keuangan Digital', sks: 3, desc: 'Keuangan berbasis TI'},
                    {name: 'Database Akuntansi', sks: 3, desc: 'Database untuk akuntansi'},
                    {name: 'Akuntansi Biaya', sks: 3, desc: 'Cost accounting'}
                ]
            },
            {
                semester: 'Semester 3',
                courses: [
                    {name: 'Akuntansi Manajemen', sks: 3, desc: 'Management accounting'},
                    {name: 'Sistem Informasi Manajemen', sks: 3, desc: 'MIS'},
                    {name: 'E-Accounting', sks: 3, desc: 'Akuntansi elektronik'},
                    {name: 'Data Analytics for Accounting', sks: 3, desc: 'Analisis data akuntansi'},
                    {name: 'Audit Internal', sks: 3, desc: 'Internal auditing'}
                ]
            }
        ]
    }
};

// Fungsi untuk menampilkan kurikulum
function showCurriculum(program) {
    const data = curriculumData[program];
    const contentDiv = document.getElementById('curriculum-content');
    
    // Update tombol active
    const buttons = document.querySelectorAll('.curriculum-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Generate HTML untuk kurikulum
    let html = `<h3 style="color: var(--primary); font-size: 2rem; margin-bottom: 2rem; text-align: center;">${data.title}</h3>`;
    
    data.semesters.forEach(sem => {
        html += `
            <div class="semester">
                <h4>${sem.semester}</h4>
                <table class="course-table">
                    <thead>
                        <tr>
                            <th style="border-radius: 10px 0 0 0;">Mata Kuliah</th>
                            <th>SKS</th>
                            <th style="border-radius: 0 10px 0 0;">Capaian Pembelajaran</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        sem.courses.forEach(course => {
            html += `
                <tr>
                    <td><strong>${course.name}</strong></td>
                    <td>${course.sks}</td>
                    <td>${course.desc}</td>
                </tr>
            `;
        });
        
        html += `
                    </tbody>
                </table>
            </div>
        `;
    });
    
    html += `
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-primary" onclick="downloadPDF('${program}')">
                📥 Download PDF Kurikulum ${program}
            </button>
        </div>
    `;
    
    contentDiv.innerHTML = html;
    
    // Scroll ke section kurikulum
    document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk download PDF (simulasi)
function downloadPDF(program) {
    alert(`Download kurikulum ${program} akan segera dimulai!\n\nCatatan: Ini adalah simulasi. Dalam implementasi nyata, file PDF akan diunduh.`);
}

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Load default curriculum saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
    showCurriculum('SI');
});

// Animasi saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe semua section
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.padding = '0.5rem 5%';
        nav.style.boxShadow = '0 5px 30px rgba(0, 102, 255, 0.5)';
    } else {
        nav.style.padding = '1rem 5%';
        nav.style.boxShadow = '0 5px 30px rgba(0, 102, 255, 0.3)';
    }
    
    lastScroll = currentScroll;
});