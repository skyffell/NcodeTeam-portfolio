import Button from "@components/Button";

const defaultLinks = [
    { title: "Главная", href: "#home" },
    { title: "О нас", href: "#about" },
    { title: "Проекты", href: "#projects" },
    { title: "Контакты", href: "#contact" }
];

const FooterLinks = (props) => {
    const { title, links = defaultLinks } = props;

    const normalizedLinks = title
        ? title.map((t) => {
              const matching = defaultLinks.find((dl) => dl.title === t);
              return { title: t, href: matching ? matching.href : `#${t}` };
          })
        : links;

    return (
        <div className="footer-links">
            {normalizedLinks.map((link, index) => (
                <Button
                    key={link.title || index}
                    as="a"
                    href={link.href}
                    variant="clean"
                >
                    {link.title}
                </Button>
            ))}
        </div>
    );
};

export default FooterLinks;
