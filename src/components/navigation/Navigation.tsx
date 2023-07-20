import { useState } from 'react';
import classes from './navigation.module.css';

export function Navigation() {
  const links = [
    { name: 'Главная' },
    { name: 'Технология' },
    { name: 'График полетов' },
    { name: 'Гарантии' },
    { name: 'О компании' },
    { name: 'Контакты' },
  ];

  return (
    <div className={classes.navigationWrapper}>
      <nav className={classes.links}>
        {links.map(link => (
          <a className={classes.link} key={link.name} href="#">
            {link.name}
          </a>
        ))}
      </nav>

      <div className={classes.select}>
        <ul className={classes.dropdown}>
          <div className={classes.linksWrapper}>
            {links.map(link => (
              <li key={link.name}>
                <a className={classes.link} href="#">
                  {link.name}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
