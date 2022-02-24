import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector) // Detecta o idioma do usuário
    .use(initReactI18next) // Passa a instância i18n para o react-i18next
    .init({
        debug: true,
        fallbackLng: 'ptbr',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            ptbr: {
                translation: {
                    navbar: {
                        portfolio: 'Portfólio',
                        cv: 'Currículo',
                        contato: 'Contato',
                        escuro: 'Escuro',
                        claro: 'Claro',
                        portugues: 'Português',
                        ingles: 'Inglês',
                        idioma: 'Idioma',
                        tema: 'Tema'
                    },
                    home: {
                        dev: 'Desenvolvedor Full Stack',
                        sobre: 'Sobre:',
                        sobremim: 'Formado em Análise e Desenvolvimento de Sistemas pela PUC-GO. Realizei diversos projetos acadêmicos com foco em MVC e CRUD, utilizando a linguagem Java e seus principais frameworks. No momento me aprofundo em Spring Boot e React JS.',
                        tecnologias: 'Tecnologias:',
                        certificacoes: 'Certificações:',
                        graduacao: '★ Graduação - Análise e Desenvolvimento de Sistemas.',
                        udemy: '★ Certificado - Spring Boot + React JS: Desenvolva Aplicações Web Completas.'
                    },
                    curriculo: {
                        part1: 'Currículo',
                        part2: "Português",
                        part3: "Inglês"
                    },
                    portfolio: {
                        pw: 'Portfólio – Website',
                        p1: 'Jan 2022 – Presente',
                        p1desc: 'Website contendo meus projetos.',
                        saibamais: 'Saiba mais',
                    },
                    projeto01modal: {
                        sobre: '💻 Sobre:',
                        sobredesc: 'Website construído com React JS e Bootstrap para apresentar meus trabalhos concluídos e suas etapas de desenvolvimento. A aplicação também conta com opções de contato e acessibilidade.',
                        estrutura: '🌌 Estrutura:',
                        home: '🔰 Home:',
                        homedesc: 'Página inicial do website.',
                        portfolio: '🔰 Portfólio:',
                        portfoliodesc: 'Página com informações sobre meus projetos. É possível aprofundar os detalhes clicando em "Saiba mais".',
                        cv: '🔰 Currículo:',
                        cvdesc: 'Página com opção de baixar currículo em dois idiomas.',
                        contato: '🔰 Contato:',
                        contatodesc: 'Página onde é possível escrever uma mensagem.',
                        tema: '🔰 Tema:',
                        temadesc: 'Botão para escolher os temas do website. Tema claro e escuro estão disponíveis.',
                        idioma: '🔰 Idioma:',
                        idiomadesc: 'Botão para escolher os idiomas do website. Português e inglês estão disponíveis.',
                        frontend: '🎨 Front-End:',
                        portfoliodesc02: '✅ Portfólio',
                        fechar: 'Fechar'
                    },
                    contato: {
                        ajuda: 'Como posso ajudar?',
                        enviar: 'Enviar'
                    }
                }
            },
            
            en: {
                translation: {
                    navbar: {
                        portfolio: 'Portfolio',
                        cv: 'Resume',
                        contato: 'Contact',
                        escuro: 'Dark',
                        claro: 'Light',
                        portugues: 'Portuguese',
                        ingles: 'English',
                        idioma: 'Language',
                        tema: 'Theme'
                    },
                    home: {
                        dev: 'Full Stack Developer',
                        sobre: 'About me:',
                        sobremim: 'Graduated in Systems Analysis and Development at PUC-GO. I carried out several academic projects focused on MVC and CRUD, using the Java language and its main frameworks. At the moment I delve into Spring Boot and React JS.',
                        tecnologias: 'Skills:',
                        certificacoes: 'Education:',
                        graduacao: '★ Graduation - System Analysis and Development.',
                        udemy: '★ Certificate - Spring Boot + React JS: Develop Complete Web Applications.'
                    },
                    curriculo: {
                        part1: 'Resume',
                        part2: "Portuguese",
                        part3: "English"
                    },
                    portfolio: {
                        pw: 'Portfolio – Website',
                        p1: 'Jan 2022 – Present',
                        p1desc: 'Website containing my projects.',
                        saibamais: 'Learn more',
                    },
                    projeto01modal: {
                        sobre: '💻 About:',
                        sobredesc: 'Website built with React JS and Bootstrap to expose my completed works and their development stages. The application also has contact and accessibility options.',
                        estrutura: '🌌 Structure:',
                        home: '🔰 Home:',
                        homedesc: 'Home page of website.',
                        portfolio: '🔰 Portfolio:',
                        portfoliodesc: 'Page with information about my projects. You can see into the details by clicking on "Learn more".',
                        cv: '🔰 Resume:',
                        cvdesc: 'Page with option to download resume in two languages.',
                        contato: '🔰 Contact:',
                        contatodesc: 'Page where you can write a message to me.',
                        tema: '🔰 Theme:',
                        temadesc: 'Button to choose website themes. Light and dark themes are available.',
                        idioma: '🔰 Language:',
                        idiomadesc: 'Button to choose website languages. Portuguese and English are available.',
                        frontend: '🎨 Front-End:',
                        portfoliodesc02: '✅ Portfolio',
                        fechar: 'Close'
                    },
                    contato: {
                        ajuda: 'How can I help?',
                        enviar: 'Send'
                    }
                }
            }
        }
    })

export default i18n;