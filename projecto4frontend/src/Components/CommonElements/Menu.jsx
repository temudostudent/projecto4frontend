import React, { useRef, useState, useEffect, createRef } from "react";
import gsap from "gsap";
import { IoMdArrowDropdown } from "react-icons/io";

const Menu = ({ items }) => {
    const $root = useRef();
    const $indicator1 = useRef();
    const $indicator2 = useRef();
    const $items = useRef(items.map(createRef));
    const [active, setActive] = useState(null);
    const [submenuItems, setSubmenuItems] = useState([]);

    const handleMenuItemClick = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
            setSubmenuItems(items[index].submenu || []);
        }
    };

    const handleMenuItemHover = (index) => {
        setActive(index);
        setSubmenuItems(items[index].submenu || []);
    }

    const animate = () => {
        if (active !== null) {
            const menuOffset = $root.current.getBoundingClientRect();
            const activeItem = $items.current[active].current;
            const { width, height, top, left } = activeItem.getBoundingClientRect();
            const paddingVertical = 25;

            const settings = {
                x: left - menuOffset.x,
                y: top - menuOffset.y + paddingVertical,
                width: width,
                height: height - paddingVertical * 2,
                backgroundColor: items[active].color,
                ease: "elastic.out(.7, .7)",
                duration: 0.8
            };

            gsap.to($indicator1.current, { ...settings });
            gsap.to($indicator2.current, { ...settings, duration: 1 });
        }
    };

    useEffect(() => {
        animate();
        window.addEventListener("resize", animate);

        return () => {
            window.removeEventListener("resize", animate);
        };
    }, [active]);

    return (
        <div ref={$root} className="menu">
            {items.map((item, index) => (
                <div key={item.name} className="menu-item" onMouseEnter={() => handleMenuItemHover(index)} onClick={() => handleMenuItemClick(index)}>
                    <a
                        ref={$items.current[index]}
                        className={`item ${active === index ? "active" : ""}`}
                        href={item.href}
                        aria-label={item.name}
                    >
                        <span className="container-item">{item.name} <IoMdArrowDropdown /></span>
                    </a>
                    {(active === index) && (
                        <div className="submenu">
                            {submenuItems.map((submenuItem, index) => (
                                <div key={index} className="submenu-item">
                                    <a href={submenuItem.href}>{submenuItem.name}</a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <div ref={$indicator1} className="indicator" />
            <div ref={$indicator2} className="indicator" />
        </div>
    );
};

export default Menu;