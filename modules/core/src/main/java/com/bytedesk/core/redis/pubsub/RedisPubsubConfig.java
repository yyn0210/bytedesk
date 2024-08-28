/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-08-23 17:13:03
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-08-23 17:41:48
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.redis.pubsub;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.listener.PatternTopic;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.springframework.data.redis.listener.adapter.MessageListenerAdapter;
// import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.JdkSerializationRedisSerializer;

// import com.bytedesk.core.redis.CustomRedisSerializer;

@Configuration
public class RedisPubsubConfig {

    // @Value("${bytedesk.redis-pubsub-channel}")
    // private String redisPubsubChannel;

    /**
     * 监听object
     * 
     * @param connectionFactory
     * @param listenerAdapter
     * @return
     */
    @Bean
    public RedisMessageListenerContainer container(RedisConnectionFactory connectionFactory,
            MessageListenerAdapter listener) {

        RedisMessageListenerContainer container = new RedisMessageListenerContainer();
        container.setConnectionFactory(connectionFactory);

        container.addMessageListener(listener, new PatternTopic(RedisPubsubConst.BYTEDESK_PUBSUB_CHANNEL_OBJECT));

        return container;
    }

    // 监听string
    @Bean
    RedisMessageListenerContainer redisMessageListenerContainer(RedisConnectionFactory redisConnectionFactory,
            RedisPubsubStringListener redisStringListener) {
        //
        RedisMessageListenerContainer redisMessageListenerContainer = new RedisMessageListenerContainer();
        redisMessageListenerContainer.setConnectionFactory(redisConnectionFactory);
        // 订阅topic - subscribe
        redisMessageListenerContainer.addMessageListener(redisStringListener,
                new ChannelTopic(RedisPubsubConst.BYTEDESK_PUBSUB_CHANNEL_STRING));
        return redisMessageListenerContainer;
    }

    /**
     * 消息监听器，使用MessageAdapter可实现自动化解码及方法代理
     * // FIXME: 编码报错 SerializationException: Could not read JSON: Unexpected
     * character ('¬' (code 172)): expected a valid value (JSON String, Number, Array,
     * Object or token 'null', 'true' or 'false')
     * 
     * @return
     */
    @Bean
    public MessageListenerAdapter listener(RedisPubsubObjectListener subscriber) {
        //
        MessageListenerAdapter adapter = new MessageListenerAdapter(subscriber, "onMessage");
        // adapter.setSerializer(new GenericJackson2JsonRedisSerializer());
        // adapter.setSerializer(new CustomRedisSerializer());
        adapter.setSerializer(new JdkSerializationRedisSerializer());
        adapter.afterPropertiesSet();
        // 
        return adapter;
    }

}