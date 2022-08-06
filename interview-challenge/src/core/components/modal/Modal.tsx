import clsx from 'clsx';
import React from 'react';
import { Modal, ModalProps, Button } from '@mui/material';

import './styles/modal.scss';

export type IMyModalProps = Omit<ModalProps, 'onClose'> & {
    closeButton?: boolean;
    wrapperProps?: React.HTMLAttributes<HTMLElement>;
    onClose?: (
        event: {},
        reason: 'backdropClick' | 'escapeKeyDown' | 'closeButton'
    ) => void;
};

export const MyModal: React.FC<IMyModalProps> = React.memo(
    ({
        classes,
        onClose,
        children,
        className,
        wrapperProps,
        closeButton = false,
        ...props
    }) => {
        return (
            <Modal
                {...props}
                onClose={onClose}
                className={clsx(className, 'my-modal')}
                classes={{
                    root: clsx('my-modal__root', classes?.root),
                    hidden: clsx('my-modal--hidden', classes?.hidden),
                }}
            >
                <div className="my-modal__wrapper">
                    {children}
                </div>

            </Modal>
        );
    }
);
