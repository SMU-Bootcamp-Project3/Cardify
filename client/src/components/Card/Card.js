import './styles'
import { GreetingCard, MessageContainer, Greeting, MainHeader, SubHeader, Recipient, MessageContent } from './styles'

import mothersDay from '../../images/mothers.jpg';
import fathersDay from '../../images/fathers.jpg';
import birthday from '../../images/birthday.jpg';
import thankYou from '../../images/thank-you-bg.jpg';
import christmas from '../../images/christmas.jpg';
import paperBg from '../../images/paperBg.jpg'

const font1 = `'Corinthia', cursive`
const font2 = `'Fuzzy Bubbles', cursive`
const font3 = `'Abel', sans-serif`

const Card = ({ mainHeader, subHeader, cardInfo }) => {

    const getCardTemplate = (card) => {
        switch (card.holiday){
            case 'mothers-day':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : mothersDay }>
                        <MessageContainer color={"#0B5345"} messageBg={paperBg} marginSetting="3rem auto">
                            <MainHeader headerFont={font3}>Wishing you a </MainHeader>
                            <SubHeader subHeader={font1} fontSize='4rem'>
                                Happy Mother's Day
                            </SubHeader>
                            <Greeting>
                                Hey {card.senderName},
                            </Greeting>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                            <Recipient>- {card.recipientName}</Recipient>
                        </MessageContainer>
                    </GreetingCard>
                );
            case 'fathers-day':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : fathersDay}>
                        <MessageContainer messageBg={paperBg} color="#BF9BCA">
                        <MainHeader headerFont={font3}>Wishing you a</MainHeader>
                            <SubHeader subHeader={font1} fontSize='4rem'>
                                Happy Birthday
                            </SubHeader>
                            <Greeting>
                                Hey {card.senderName},
                            </Greeting>
                            <MessageContent>
                              {card.messageType === 'custom' ? card.customMessage : card.message}  
                            </MessageContent>
                            <Recipient>- {card.recipientName}</Recipient>
                        </MessageContainer>
                    </GreetingCard>
            );
            case 'birthday':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : birthday}>
                        <MessageContainer messageBg={paperBg} marginSetting="3rem 0" color="#DE7BC6">
                        <MainHeader headerFont={font3}>Wishing you a</MainHeader>
                            <SubHeader subHeader={font1} fontSize='3rem'>
                                Thank You
                            </SubHeader>
                            <Greeting>
                                Hey {card.senderName},
                            </Greeting>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                            <Recipient>- {card.recipientName}</Recipient>
                        </MessageContainer>
                    </GreetingCard>
            );
            case 'christmas':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : christmas}>
                        <MessageContainer messageBg={paperBg} marginSetting="20rem auto 1rem" color="#923846">
                        <MainHeader headerFont={font3}>Wishing you a Happy</MainHeader>
                            <SubHeader subHeader={font1} fontSize="5rem">
                                Merry Christmas
                            </SubHeader>
                            <Greeting>
                                Hey {card.senderName},
                            </Greeting>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                            <Recipient>- {card.recipientName}</Recipient>
                        </MessageContainer>
                    </GreetingCard>
            );
            case 'thank-you':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : thankYou}>
                        <MessageContainer messageBg={paperBg} marginSetting="12rem 0 3rem" color="#895C4B">
                        <MainHeader headerFont={font1} fontSize="5rem">I appreciate you</MainHeader>
                            <SubHeader>
                            {card.senderName}
                            </SubHeader>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                            <Recipient>- {card.recipientName}</Recipient>
                        </MessageContainer>
                    </GreetingCard>
            );
            default: 
            <div></div>
        }
    }
    return (
        <div style={{marginTop: '2rem'}}>
            {getCardTemplate(cardInfo)}
        </div>
        // <div className="card-container">
        //     <div className="content-wrapper">
        //         <div className="main-header">
        //             <h3>{mainHeader}</h3>
        //         </div>
        //         <div className="sub-header">
        //             <h1>{subHeader}</h1>
        //         </div>
        //         <div>
        //             <p>Hey {recipientName},</p>
        //         </div>
        //         <div className="greeting-message">
        //             {message}
        //         </div>
        //         <div className="sender-name">
        //             <p>- {senderName}</p>
        //         </div>
        //     </div>
        // </div> 
    )
}

export default Card;