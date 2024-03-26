import React from 'react';
import Link from 'next/link';

const PageHeader = (props) => {
    return (
        <div>
            <section className="page-header"
                     style={{backgroundImage: `url(/assets/images/background/inner-banner-bg.png)`}}>
                <div className="container">
                    <ul className="list-unstyled thm-breadcrumb">
                        <li>
                            <a href="/">Home /</a>
                        </li>
                        <li className="active"><a href="#">{ props.title }</a></li>
                    </ul>
                    <h2 className="inner-banner__title">{ props.title }</h2>
                </div>
            </section>

        <style jsx>{`
              .thm-breadcrumb {
                margin: 0;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                }
                .list-unstyled li {
                margin-left: 6px;
                }
                .thm-breadcrumb li a {
                  color: white;
                  font-weight: 600;
                }
        `}</style>

        </div>

    )
}
export default PageHeader;