/**
 * @startingPoint section="Content" subtitle="Mono-labelled contact/email list" viewport="700x200"
 */
export interface ContactItem { label: string; value: string; href: string; }
export interface ContactListProps { items: ContactItem[]; }

export function ContactList(props: ContactListProps): JSX.Element;
