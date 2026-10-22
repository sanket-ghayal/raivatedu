"use client";

import { useState } from "react";
import styles from "./Accordion.module.css";

// Accessible accordion: one panel open at a time, works with keyboard (Tab, Enter, Space).
// items = [{ id, title, content }]
export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className={styles.list}>
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className={`${styles.item} ${open ? styles.open : ""}`}>
            <h3 className={styles.heading}>
              <button
                id={`${item.id}-button`}
                className={styles.trigger}
                aria-expanded={open}
                aria-controls={`${item.id}-panel`}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                {item.title}
                <span className={styles.icon} aria-hidden="true" />
              </button>
            </h3>
            <div
              id={`${item.id}-panel`}
              role="region"
              aria-labelledby={`${item.id}-button`}
              className={styles.panel}
            >
              <div className={styles.inner}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
