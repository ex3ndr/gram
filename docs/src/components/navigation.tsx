'use client';
import * as React from 'react';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './ui/navigation-menu';
import Link from 'next/link';

export const Navigation = React.memo(() => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                </Link>
                <Link href="/collection" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Collections
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuList>
        </NavigationMenu>
    )
});