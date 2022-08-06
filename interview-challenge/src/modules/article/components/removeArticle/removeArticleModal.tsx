import { Button, IconButton, Typography } from "@mui/material"
import { MyModal } from "core/components"
import CloseIcon from "@mui/icons-material/Close"
import React from "react"

import './remove-article-modal.scss'

interface IRemoveArticleModalProps {
    isOpen: boolean,
    onClose: () => void,
    onAccept?: () => void,
}

export const RemoveArticleModal: React.FC<IRemoveArticleModalProps> = ({
    isOpen,
    onClose,
    onAccept
}) => {

    return (
        <MyModal onClose={onClose} open={isOpen} className="remove-article-modal">
            <section>
                <header className="remove-article-modal__header">
                    <Typography variant="h5" className="remove-article-modal__title">
                        {"Delete article"}
                    </Typography>
                    <IconButton className="remove-article-modal__close"
                        onClick={onClose} aria-label="close" >
                        <CloseIcon />
                    </IconButton>
                </header>
                <section className="remove-article-modal__content">
                    <Typography >
                        {"Are you sure to delete Article?"}
                    </Typography>
                </section>
                <footer className="remove-article-modal__footer">
                    <Button onClick={onClose} variant="outlined" color="inherit" className="remove-article-modal__btn remove-article-modal__btn-no ">
                        {"No"}
                    </Button>
                    <Button onClick={onAccept} variant="contained" color="error">
                        {"Yes"}
                    </Button>

                </footer>
            </section>

        </MyModal >

    )

}